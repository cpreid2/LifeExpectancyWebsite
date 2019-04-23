(function (document, $) {
	function handleClick(e) {
		//if we don't have a reference to our RWJFAnalytics object, then don't bother moving on.
		if (typeof(RWJFAnalytics)==="undefined") {
			return;
		}

		//get our target link.  we need to bubble up the dom to find any links in order to handle <a><span></span></a> scenarios.
		var target = getTargetAnchor(e.target);
		if (!target) {
			return;
		}
		var jTarget = $(target);

		//check to see if we are to track a basic page event
		var trackBasicPageEvent = jTarget.data('track-basic-page-event');
		var propagateClick = jTarget.data('propagate-click');
		var stopPropagation = typeof propagateClick === 'undefined' || !propagateClick;

		if (trackBasicPageEvent && typeof RWJFAnalytics.recordBasicPage === 'function') {
			RWJFAnalytics.recordBasicPage(trackBasicPageEvent, target);
			if (stopPropagation) {
				e.stopPropagation();
			}
			return;
		}

		//check to see if we are to track a generic event
		if (typeof jTarget.data('track-event') !== 'undefined' && typeof RWJFAnalytics.record === 'function') {
			var trackEvents = [jTarget.data('track-event-name')];
			var trackEventValues = jTarget.data('track-event-values');
			if (!trackEventValues) {
				trackEventValues = {};
            }
			var trackEventCompPath = jTarget.data('track-event-comp-path');
			var trackEventNoCollect = jTarget.data('track-event-no-collect');
			if (!trackEventNoCollect) {
				trackEventNoCollect = false;
			}

			var onHomepage = jTarget.data('track-on-homepage');
			if(onHomepage && RWJFAnalytics.HomePage.hasBeenInitialized()){
				var homepageVals = RWJFAnalytics.HomePage.homepageComponentClick(target);
				trackEvents.push(homepageVals.event);
				trackEventValues.onsiteCampaign = homepageVals.onsiteCampaign;
				trackEventValues.homepageViewContent = homepageVals.homepageViewContent;
			}
			if (stopPropagation) {
				e.stopPropagation();
			}
			RWJFAnalytics.record(trackEvents, trackEventValues, trackEventCompPath, target, trackEventNoCollect);
		}
	}

	function getTargetAnchor(target) {
		var localTarget = target;
		while (localTarget && localTarget.tagName != 'A') {
			localTarget = localTarget.parentNode;
		}
		return localTarget;
	}

	//Below we use addEventListener('click', handler, true) so we can attach
	//our click event as a capture event before our sitecatalyst.js is included on the page.
	//This allows us to execute our custom event before sitecatalyst has a chance to track
	//our links and cause duplicate tracking getting sent to sitecatalyst.
	//Due to the above reason, we also do not wrap this in a $(document).ready(handler) call.
	if (!document.body.addEventListener) {
		$('a').click(handleClick);//for older browsers that handle bubbling of events.
	} else {
		document.body.addEventListener('click', handleClick, true);
	}
})(document, jQuery);
