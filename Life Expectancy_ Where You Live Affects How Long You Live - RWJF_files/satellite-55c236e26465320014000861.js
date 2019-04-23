_satellite.pushBlockingScript(function(event, target, $variables){
      _satellite.analyticsPlugins=function(){
  

	
	//_channelPattern syntax: '[channel name]|[comma-delimited list of prefixes]>[channel2 name]|[comma-delimited list2 of prefixes]>etc'
	s._channelPattern= 'Other Promotions|xgo,xdr,xqr>Paid Advertising|xcb,xct>Blogger Outreach Referral|xbg>Email|xem>SEM|xps>RWJF Share Referral|xsh,xat>Social Media - Campaigns|xli,xlip,xfb,xfbp,xtw,xtwp,xyt,xig,xgp,xat,xsp';
	s._channelParameter= 'Email|et_cid>Paid Advertising|pid>SEM|psid';
	s._channelDomain= 'Social Media - Organic|vk.com,12seconds.tv,4travel.jp,advogato.org,ameba.jp,anobii.com,asmallworld.net,backtype.com,badoo.com,bebo.com,bigadda.com,bigtent.com,biip.no,blackplanet.com,blog.seesaa.jp,blogspot.com,blogster.com,blomotion.jp,bolt.com,brightkite.com,buzznet.com,cafemom.com,care2.com,classmates.com,cloob.com,collegeblender.com,cyworld.co.kr,cyworld.com.cn,dailymotion.com,delicious.com,deviantart.com,digg.com,diigo.com,disqus.com,draugiem.lv,facebook.com,faceparty.com,fc2.com,flickr.com,flixster.com,fotolog.com,foursquare.com,friendfeed.com,friendsreunited.com,friendster.com,fubar.com,gaiaonline.com,geni.com,goodreads.com,grono.net,habbo.com,hatena.ne.jp,hi5.com,hotnews.infoseek.co.jp,hyves.nl,ibibo.com,identi.ca,imeem.com,intensedebate.com,irc-galleria.net,iwiw.hu,jaiku.com,jp.myspace.com,kaixin001.com,kaixin002.com,kakaku.com,kanshin.com,kozocom.com,last.fm,linkedin.com,livejournal.com,me2day.net,meetup.com,mister-wong.com,mixi.jp,mixx.com,mouthshut.com,multiply.com,myheritage.com,mylife.com,myspace.com,myyearbook.com,nasza-klasa.pl,netlog.com,nettby.no,netvibes.com,nicovideo.jp,ning.com,odnoklassniki.ru,orkut.com,pakila.jp,photobucket.com,pinterest.com,plaxo.com,plurk.com,plus.google.com,reddit.com,renren.com,skyrock.com,slideshare.net,smcb.jp,smugmug.com,sonico.com,studivz.net,stumbleupon.com,t.163.com,t.co,t.hexun.com,t.ifeng.com,t.people.com.cn,t.qq.com,t.sohu.com,tabelog.com,tagged.com,taringa.net,tripit.com,trombi.com,trytrend.jp,tuenti.com,tumblr.com,twine.com,twitter.com,uhuru.jp,viadeo.com,vimeo.com,vkontakte.ru,vox.com,wayn.com,weibo.com,weourfamily.com,wer-kennt-wen.de,wordpress.com,xanga.com,xing.com,yaplog.jp,yelp.com,youtube.com,yozm.daum.net,yuku.com,zooomr.com';
 	s.trackingServerSecure=s.trackingServer="rwjf.d1.sc.omtrdc.net";
	
	s.visitor = Visitor.getInstance("2FAD68F454F76D590A4C98A6@AdobeOrg");
	
	function s_getObjectID(o) {
		var ID=o.href;
		return ID;
	}
	s.getObjectID=s_getObjectID;
	

	s.usePlugins=true;
	function s_doPlugins(s) {
    //calls aborted by default, this is toggled in the search direct call now
    if(document.location.pathname.indexOf('search-results')>=0){
      s.isSearchPage=true;
      s.abort=s.isSearchDirectCall?0:1;
    }
		if(s_account.match(/^rwjf.{0,3}prod$/)){
				s.sa(s_account=s_account+',rwjfglobal')
			}
		/* Enabling Dynamic Object IDs for improved ClickMap accuracy */
		if(s.version.indexOf('H')==0){
			s.setupDynamicObjectIDs();
		}
		
		/* Capture email subscriber analytics */
		s.eVar75 = s.getQueryParam('rid');
	
		/* TimeParting Variables */
		s.prop66=s.getTimeParting('h','-5'); // Set hour
	
		/* Recording Visit Number */
		s.prop65=s.eVar62=s.getVisitNum();
	
		/* Setting Previous Value Plug-in for Page Names*/
		s.prop12=s.getPreviousValue(s.pageName,'gpv_pn','');
		
		/* Setting Previous Value Plug-in for Nav Link Clicks - only record when there is a value */
		var navLink = s.getPreviousValue(s.navLinkClick,'gnl_click','');
		
		var navLinkClicked = navLink && navLink!="no value";
	
		if(navLinkClicked){
			s.eVar26 = navLink;
			s.events = s.apl(s.events,"event20",',',1);
		}
		
		var contentListingTab = s.getPreviousValue(s.contentListing,'content_listing','');
		
		var fromContentListing = contentListingTab && contentListingTab!="no value";
		
		if(fromContentListing){
			s.prop26 = contentListingTab;	
		}
		
		
		var homepageLinkCLick = s.getPreviousValue(s.homepageClick,'homepage_click','');
		if(homepageLinkCLick && homepageLinkCLick != "no value"){
			s.eVar17 = "home:" + homepageLinkCLick;
			s.events = s.apl(s.events,"event96",',',1);
			s.list3 = homepageLinkCLick;
		}
	
		var searchLinkClick = s.getPreviousValue(s.searchLinkClick,'search_link_click','');
	
		if(searchLinkClick && searchLinkClick != "no value"){
			s.eVar24 = searchLinkClick;
			s.events = s.apl(s.events,"event79",',',1);
			s.events = s.apl(s.events,"event98",',',1);
			var searchLinkPosition = searchLinkClick.split(":")[1];
			s.products = ";"+s.prop54+";;;event98=1|event79=" + searchLinkPosition + ";eVar24=" + searchLinkClick;
			
			//Clear the cookie, so these events are not triggered more than once
			delete s[searchLinkClick];
			s.getPreviousValue(s.searchLinkClick,'search_link_click','')
		}
	
		var searchLastFilter = s.getPreviousValue(s.searchLastFilter,'search_last_filter','');
		if(searchLastFilter && searchLastFilter != 'no value'){
			s.prop23 = searchLastFilter;
	
			//Clear the cookie, so this prop isn't set more than once
			delete s[searchLastFilter];
			s.getPreviousValue(s.searchLastFilter,'search_last_filter','');
		}
	
	
		var searchEventFired = s.events && s.events.indexOf("event97") > -1;
		if(searchEventFired){
			//RWJF-7645 when event97 fires, do not fire prodView or event82
			//Code removes strings from a comma separeted list
			var eventsList = s.events.split(',');
			s.events = _.filter(eventsList, function(event){ return event != "prodView" && event != "event82"}).join(',');
		}
		
		/* Detecting if this is from a footer link */
		var ignoreCrossSell = s.getPreviousValue(s.ignoreCrossSell,'ignore_click','');
		
		var possibleCrossSell = s.getPreviousValue(s.checkCrossCheck, 'cross_check', '');
		
		var canDetectCrossSell =  !searchEventFired && !navLinkClicked && ignoreCrossSell != "ignore" && possibleCrossSell == "check";
		
		/* Detecting cross-sell - ignore if this was from a nav or footer link*/
		if(s.prop54 && canDetectCrossSell){
			var crossSell = s.getPreviousValue(s.prop54,"cross_sell",'');
			
			//only record cross_sell if from other page; ignore page refresh or external urls;
			var invalidSell = !crossSell || crossSell == "no value" || crossSell == s.prop54;
			
			if(!invalidSell){
				s.products = ";"+s.prop54+";;;; eVar19="+crossSell+"|eVar59="+s.prop54;
			}	
		}
		
		/* Setting The Percent Page Viewed Plug-in*/
		if(s.prop12){
			s.prop64=s.getPercentPageViewed();
		}
	
		/* fire the addthisTrack plugin for Sharing */
		s.addthisTrack(); /* share explicitly so there is only one logging call */
		if (s._ate == 'share')
		{
			s.linkTrackVars = "events,eVar53,eVar54,products";
			s.linkTrackEvents = "event44";
			var url = s._atu;
			//Removes Campaign code
			var realUrl = url.replace("\?cid=xsh_rwjf_at","").replace("\?cid=xsh_rwjf_em","");
			var pageName = RWJFAnalytics.getPageName(realUrl);
			var pageUuid = RWJFAnalytics.getPageUuid(realUrl);
			s.eVar53 = url;
			s.eVar54 = pageName;
			s.products = s.apl(s.products,";" + pageUuid,',',1);
			s.events = "event44";
		}
	
	
		/* Channel Manager Plugin: channelManager v2.8*/
		s._cmParams=['et_cid','pid','psid','cid'];
		var paramToUse=s._cmParams[0];
		for(i=s._cmParams.length-1;i>=0;i--){
			if(s.getQueryParam(s._cmParams[i])){
				paramToUse=s._cmParams[i];
			}
		}
		
		//s.channelManager(s._cmParams.join(),':','','','s_cm','1');
		s.channelManager(paramToUse,':','','','s_cm','1');
		
		//only set campaign values when not direct
		if(s._channel && s._channel!="Typed/Bookmarked"){
		
			//settings common to all channels
			if(s._channel){
				s.eVar11=s._channel;
				s.eVar16=s._referringDomain;
				//only set one param when multiple are in URL
				for(var i=0;i<s._cmParams.length;i++){
					s.campaign=s.campaign?s.campaign:s.getQueryParam(s._cmParams[i]);
				}
				//give social domains priority over non-social tracking codes from those domains
				if(s._channel!="Social Media - Campaigns"){
					s._cmSocial=s._channelDomain.split('>')[0].split('|')[1].split(',');
					s.refHost=document.referrer.split('/')[2];
					if(s.refHost){
						for(var i=0;i<s._cmSocial.length;i++){
							if(s.refHost.indexOf(s._cmSocial[i])==0 || s.refHost.indexOf('.'+s._cmSocial[i])>=0){
								s.eVar11=s._channel='Social Media - Organic';
								s.eVar16=s._referringDomain=s.refHost;
							}
						}
					}			
				}				
			}
			
			//exceptions for specific channels
			if(s._channel=="SEM"){
				s.eVar12=s._partner;
				s.eVar13=s._keywords;
				//paid & natural
				s.eVar9=s._partner;
				s.eVar10=s._keywords;
			}else if (s._channel=="Natural Search"){
				s.eVar11="SEO";
				s.eVar14=s._partner;
				s.eVar15=s._keywords;
				s.campaign="n|" + s._partner +"|"+ s._keywords;
				//paid & natural
				s.eVar9=s._partner;
				s.eVar10=s._keywords;
			}else if(s._channel=="Social Media - Organic"){
				s.campaign=s._referringDomain||'';
			}else if(s._channel=="Unknown Paid Channel"){
				s.eVar11="Other Promotions";
			}else if(s._channel=="Other Natural Referrers"){
				s.eVar11="Other Referring Domains";
				s.campaign=s._referringDomain||'';
			}else{}
			s.campaign=s.campaign.toLowerCase();
			
			//default values to 'n/a' if not used by the channel (CM already does this too). Helps to avoid inflation.
			if(s.eVar11){
				s.eVar9=s.eVar9||'n/a';
				s.eVar10=s.eVar10||'n/a';
				s.eVar12=s.eVar12||'n/a';
				s.eVar13=s.eVar13||'n/a';
				s.eVar14=s.eVar14||'n/a';
				s.eVar15=s.eVar15||'n/a';
				s.eVar16=s.eVar16||'n/a';
			}
		}
		//stack channel values
		
		s.eVar60=s.crossVisitParticipation(s.eVar11,'s_ev60','30','5','>','',0);
	
		//Setting list vars for taxonomy
		RWJFAnalytics.checkAndAddTaxonomyData();
	
		/* Copying props to eVars and setting logic-based variables */	
// 		if(s.pageType){
// 			s.pageName = "";
// 		}
// 		
		if(s.pageName){
			s.eVar1=s.pageName;
		}	
		if(s.channel){
			s.eVar2="D=ch";
		}	
		if(s.prop4){
			s.eVar3="D=c4";
		}
		if(s.prop25){
			s.eVar23="D=c25";
		}
		if(s.prop21){
			s.eVar22="+1";
		}
		if(s.prop66){
			s.eVar63="D=c66";
		}
		if(s.prop67){
			s.eVar64="D=c67";
		}
		if(s.prop68){
			s.eVar65="D=c68";
		}
		if(s.prop5){
			s.eVar38 ="D=c5";
		}
		if(s.prop7){
			var authors = s.prop7.split("|");
			s.eVar5 = authors[0];
		}
		
		//kw additions
		//internal campaigns
		if(s.c_r('s_intcmp') && s.c_r('s_intcmp')!='-'){
			s.eVar17=s.c_r('s_intcmp');
			s.c_w('s_intcmp','-');
			s.events=s.apl(s.events,'event96',',',1);
		}
		
		//campaign click past
		s.clickPast(s.campaign,'event80','event81');
		
		//total social shares
		var tempEvents=','+s.events+',';
		if(tempEvents.indexOf(',event35,')>=0 || tempEvents.indexOf(',event41,')>=0 || tempEvents.indexOf(',event42,')>=0 || tempEvents.indexOf(',event47,')>=0 || tempEvents.indexOf(',event48,')>=0 || tempEvents.indexOf(',event51,')>=0 || tempEvents.indexOf(',event52,')>=0 || tempEvents.indexOf(',event53,')>=0){
			s.events=s.apl(s.events,'event43',',',1);
			s.linkTrackEvents=s.apl(s.linkTrackEvents,'event43',',',1);
		}
		
		//page URL
		s.eVar7=document.location.hostname=='www.rwjf.org'?document.location.pathname:document.location.hostname+document.location.pathname;
		s.prop10='D=v7';
		s.eVar8='D=c12';
		
		//content view ID copy and count
		if(s.products && !s.isSearchPage){
			s.prop54=(s.products||'').split(',')[0].split(';')[1]||'';
			s.eVar18='1+';
			//Make sure to set cross sell cookie explicitly
			s.getPreviousValue(s.prop54,"cross_sell",'')
		}
		
		//campaigns
		if(s.campaign){
			s.eVar27='D=v0';
			s.eVar61='D=pageName';
		}
	
		
		//copy vars
		if(s.eVar33){
			s.prop33='D=v33';
		}
		if(s.eVar32){
			s.prop34='D=v32';
		}
		s.eVar34=s.campaign;
		s.engagementScore();
		
		//content finding methods v72
		var s_cfm='';
			//methods that only count if the are direct to the content
			if(s.events && s.events.indexOf('prodView')>=0 && s.prop4 && s.prop4.toLowerCase()!='[no content type]'){
				if(s.campaign){
					s_cfm='external source';
				}else if(s.eVar17){
					s_cfm='onsite campaign';
				}else if(document.referrer==''){
					s_cfm='direct';
				}		
			}
			//methods that count if they are on page other than the content
			else{
				if(s.eVar21){
					s_cfm='internal search';
				}else if(s.channel=='blogs'){
					s_cfm='blogs';
				}else if(s.channel=='home'){
					s_cfm='home';
				}else if(s.prop4 && s.prop4.toLowerCase()=='[no content type]'){
					s_cfm='browse';
				}		
			}
		s.eVar72=s_cfm;
		
	}
	s.doPlugins=s_doPlugins;
	
	s.removeEvent = function(re,e){//re=event to remove, e=event list string
		e=e?e:"";re=re?re:"none";
		var ea= e.split(',');
		for(var i = ea.length; i--;) {
			if(ea[i].indexOf(re)>=0) {
				ea.splice(i, 1);
			}
		}
		return ea.join();
	};
	
	s.engagementScore = function(){
		//remove event24 from event string if already there to avoid inflation from setting it again
		s.events=s.removeEvent('event24',s.events);
		//s.eVar29='';
		var es=','+s.events+','; //event string
		var score=0;
		var haveMatch=false;
		var map=[
			////////////////[trigger event, score value, set every occurrence? Otherwise visit]
			['event68',1,0],
			['event69',3,0],
			['event1',1,1],
			['event31',1,0],
			['event32',1,0],
			['event33',1,0],
			['event34',1,0],
			['event5',3,1],
			['event7',3,1],
			['event9',5,0],
			['event35',5,0],
			['event41',8,0],
			['event42',8,0],
			['event44',8,0],
			['event51',8,0],
			['event47',8,0],
			['event48',8,0],
			['event52',8,0],
			['event53',8,0],
			['event62',1,0],
			['event66',1,0],
			['event45',5,0],
			['event46',5,0],
			['event54',5,0],
			['event55',5,0],
			['event56',5,0],
			['event65',9,0],
			['event64',1,0],
			['event38',1,0],
			['event39',8,0],
			['event57',1,0],
			['event60',3,0],
			////////////////
		['notreal',0,0]]; //this is just here so we don't forget to not include the last comma
		
		var e=new Date;e.setTime(e.getTime()+1000*60*30);
		var deDup=s.c_r('eng_deDup')||',';
		
		//each occurrence
		for(i=0;i<map.length;i++){
			if(es.indexOf(","+map[i][0]+",")>=0 && deDup.indexOf(","+map[i][0]+",")==-1){
				haveMatch=true;
				score+=map[i][1];
				if(map[i][2]){
					deDup=deDup+map[i][0]+',';
				}
			}	
		}
		s.c_w('eng_deDup',deDup,e);
		
		//trigger when three pages have been viewed
		var firstThree=s.c_r('eng_threePages')?s.c_r('eng_threePages').split('|,|'):[];
		if(firstThree.length<3 && firstThree.indexOf(s.pageName)<0) {
			if(firstThree.length==2){
				haveMatch=true;
				score+=1;
			}
			firstThree.push(s.pageName);
		}
		s.c_w('eng_threePages',firstThree.join('|,|'),e);
		
		
		if(haveMatch){
			s.linkTrackEvents=s.apl(s.linkTrackEvents,'event24',',',1);
			s.linkTrackVars=s.apl(s.linkTrackVars,'eVar29',',',1);
			s.linkTrackVars=s.apl(s.linkTrackVars,'events',',',1);
			s.Media.linkTrackEvents=s.apl(s.linkTrackEvents,'event24',',',1);
			s.Media.linkTrackVars=s.apl(s.linkTrackVars,'eVar29',',',1);
			s.Media.linkTrackVars=s.apl(s.linkTrackVars,'events',',',1);
			
			s.events=s.apl(s.events,'event24='+score,',',1);
			s.eVar29='+'+score;
		}
	
	};
	
	/*********Media Module Calls**************/
	s.loadModule("Media");
	/*Configure Media Module Functions */
	s.Media.autoTrack = false;
	s.Media.trackWhilePlaying = true;
	s.Media.trackVars = "events,prop61,eVar17,eVar29,eVar67,eVar68,eVar3,list1,list3";
	s.Media.trackEvents = "event67,event68,event69,event70,event96,event24";
	s.Media.trackMilestones = "25,50,75";
	s.Media.segmentByMilestones = true;
	s.Media.trackUsingContextData = true;
	s.Media.contextDataMapping = {
		"a.media.name":"eVar67,prop61",
		"a.media.segment":"eVar68",
		"a.contentType":"eVar3",
		"a.media.timePlayed":"event67",
		"a.media.view":"event68,event24=1",
		"a.media.segmentView":"event70",
		"a.media.complete":"event69,event24=3"
	};
	
	/**
	 * Comment from Numeric:
	 * One of the quirky things with video tracking is that it will only send these variables with the video start request.
	 * In order to send them with other requests, you have to send the data in the s.Media.monitor function using the s.Media.track() function.
	 *
	 * Use s.Media.track to send data so we can include all of the trackVars
	 */
	// setup object for tracking playlists
	s.lastVideo = {};
	
	s.Media.monitor = function(s,media){
		 //console.log("MONITOR : " + media.name + " : event = "+ media.event + " , mediaState = " + s.mediaState);
		s.eVar29='';
		// default last video
		if(!s.lastVideo.name){
			s.lastVideo = {};
			s.lastVideo.name = media.name;
			s.lastVideo.offset = media.offset;
			s.lastVideo.state = media.event;
		}
		// already started, check for changes
		else {
			if(!s.lastVideo.pausing){
				// new video has started without the previous having ended
				if(s.lastVideo.name != media.name){
					// make sure we only pause if we're not paused
					if(s.lastVideo.state != "STOP" || s.lastVideo.state != "CLOSE"){
						// pause our tracking and send what we've done so far
						s.lastVideo.pausing=true;
						s.Media.stop(s.lastVideo.name,s.lastVideo.offset);
						s.Media.track(s.lastVideo.name);
						s.lastVideo.pausing=false;
	
	
						// update lastvideo stuff with new video stuff
						s.lastVideo.name = media.name;
						s.lastVideo.offset = media.offset;
						s.lastVideo.state = media.event;
					}
				}
				else {
					s.lastVideo.name=media.name;
					s.lastVideo.offset=media.offset;
					s.lastVideo.state=media.event;
				}
			}
		}
	
		if(media.event == "MILESTONE"){
			delete s['eVar17'];
			delete s['list3'];
			if(s.events){
				if(s.events.indexOf('event96,') > 0){
					s.events = s.events.replace('event96,', '');
				} else if(s.events.indexOf(',event96') > 0){
					s.events = s.events.replace(',event96', '');
				} else {
					s.events = s.events.replace('event96', '');
				}
			}
	
			s.Media.track(media.name);
		}
	
		if(media.event == "CLOSE" && s.mediaState == "close"){
			s.Media.track(media.name);
			s.mediaState = "";
		}
		
		if(media.event == "OPEN"){
			s.eVar29='+1';
		}
	
		if(media.event == "CLOSE"){
			s.eVar29='+3';
		}
	};
	
	s.mediaState="";
	
	/*Call on video load*/
	s.startVideo= function(mediaName,mediaLength,mediaOffset,mediaPlayerName){
		//console.log("MEDIA : Start video " + mediaName + ", mediaLength = " + mediaLength + ", mediaOffset = " + mediaOffset);
		s.mediaState="open";
		s.Media.open(mediaName,mediaLength,mediaPlayerName);
		// Youtube video doesn't track start event but only play. So when the s.startVideo is called by yt-video component. We want to track the "start" and "play" events in analytics.
		// That is why we call the s.playVideo method here
		s.playVideo(mediaName,mediaOffset);
		
	};
	
	/*Call on video resume from pause and slider release*/
	s.playVideo=function(mediaName,mediaOffset){
		//console.log("MEDIA : Play video " + mediaName + ", mediaOffset = " + mediaOffset);
		s.mediaState="play";
		s.Media.play(mediaName,mediaOffset);
	};
	
	/*Call on video pause and slider grab*/
	s.stopVideo=function(mediaName,mediaOffset){
		if(s.mediaState != "stop"){
			//console.log("MEDIA : Stop video " + mediaName + ", mediaOffset = " + mediaOffset);
			s.mediaState="stop";
			s.Media.stop(mediaName,mediaOffset);
		}
	};
	
	/*Call on video end*/
	s.endVideo=function(mediaName,mediaOffset){
		s.stopVideo(mediaName,mediaOffset);
		//console.log("MEDIA : End video " + mediaName + ", mediaOffset = " + mediaOffset);
		s.mediaState="close";
		s.Media.close(mediaName);
	};
	





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



		/*
		 * AddThis v2.5 - AddThis Bookmarking/Sharing integration
		 */
		
		s.addthisTrack=new Function("te","lt","var s=this;te=te?te:'share';lt=lt?lt:'o';s._ate='';if(!s._atst){if(typeof addthis!='undefined'){s._ateh=function(evt){s._atu=evt.data.url;switch(evt.type){case 'addthis.menu.open':if(evt.data.service != 'undefined'){if(s._atto){s._ateo='open';s._ats = evt.data.service;s._atp=evt.data.pane;s.tl(true,lt,'addthis:share ('+s._ats+')')}}break;case 'addthis.menu.share':if(evt.data.service&&s._atts){s._ateo='share';s._ats=evt.data.service;s.tl(true,lt,'addthis:share ('+s._ats+')')}break;case 'addthis.menu.close':if(s._attc){s._ateo='close';s._atp=evt.data.pane;s.tl(true,lt,'addthis:close ('+s._atp+')')}break}};addthis.addEventListener('addthis.menu.open',s._ateh);addthis.addEventListener('addthis.menu.close',s._ateh);addthis.addEventListener('addthis.menu.share',s._ateh);s._atst=true;if(te=='all')s._atto=s._attc=s._atts=true;else{s._atto=te.indexOf('open')>=0;s._attc=te.indexOf('close')>=0;s._atts=te.indexOf('share')>=0}return 1}return 0}if(s._ateo){s._ate=s._ateo;s._ateo=''}return 1");
		
		/*
		* Plugin Utility: apl (Append List) v1.1
		*/
		
		s.apl=new Function("l","v","d","u","var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");
		
		
		/*
		 * channelManager v2.8 - Tracking External Traffic
		 */
		s.channelManager=new Function("a","b","c","d","e","f","var s=this,A,B,g,l,m,p,q,P,h,k,u,S,i,O,T,j,r,t,D,E,F,G,H,N,U,v=0,X,Y,W,n=new Date;n.setTime(n.getTime()+1800000);if(e){v=1;if(s.c_r(e))v=0;if(!s.c_w(e,1,n))s.c_w(e,1,0);if(!s.c_r(e))v=0;}g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(!g)h=1;i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');for(m=0;m<k.length;m++){B=j.indexOf(k[m])==-1?'':g;if(B)O=B;}if(!O&&!h){p=g;U=g.indexOf('//');q=U>-1?U+2:0;Y=g.indexOf('/',q);r=Y>-1?Y:i;u=t=g.substring(q,r).toLowerCase();P='Other Natural Referrers';S=s.seList+'>'+s._extraSearchEngines;if(d==1){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^');g=s.repl(g,'as_q','*');}A=s.split(S,'>');for(i=0;i<A.length;i++){D=A[i];D=s.split(D,'|');E=s.split(D[0],',');for(G=0;G<E.length;G++){H=j.indexOf(E[G]);if(H>-1){if(D[2])N=u=D[2];else N=t;if(d==1){N=s.repl(N,'#',' - ');g=s.repl(g,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','oogle');}i=s.split(D[1],',');for(k=0;k<i.length;k++){l=s.Util.getQueryParam(i[k],g).toLowerCase();if(l)break;}}}}}if(!O||f!='1'){O=s.Util.getQueryParam(a);if(O){u=O;if(N)P='Paid Search';else P='Unknown Paid Channel';}if(!O&&N){u=N;P='Natural Search';}}if(h==1&&!O&&v==1)u=P=t=p='Typed/Bookmarked';g=s._channelDomain;if(g){k=s.split(g,'>');for(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T].toLowerCase();i=j.indexOf(Y);if(i>-1)P=q[0];}}}g=s._channelParameter;if(g){k=s.split(g,'>');for(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){U=s.Util.getQueryParam(r[T]);if(U)P=q[0];}}}g=s._channelPattern;if(g){k=s.split(g,'>');for(m=0;m<k.length;m++){q=s.split(k[m],'|');r=s.split(q[1],',');S=r.length;for(T=0;T<S;T++){Y=r[T].toLowerCase();i=O.toLowerCase();H=i.indexOf(Y);if(H==0)P=q[0];}}}X=P+l+t;c=c?c:'c_m';if(c!='0')X=s.getValOnce(X,c,0);if(X){s._referrer=p?p:'n/a';s._referringDomain=t?t:'n/a';s._partner=N?N:'n/a';s._campaignID=O?O:'n/a';s._campaign=u?u:'n/a';s._keywords=l?l:N?'Keyword Unavailable':'n/a';s._channel=P?P:'n/a';}");
		
		
		/* Top 130 Search Engines - Grouped */
		s.seList="altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Google>icqit.com|q|icq>bing.com|q|Bing>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";
		
		/**
		 * Plugin Utility: Unknown Version
		 */
		
		s.clickPast=new Function("scp","ct_ev","cp_ev","cpc","var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}");
		
		
		s.p_fo=new Function("n","var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}");
		
		s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
			+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
			+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
			+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
			+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
			+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
			+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length; q++){z=a"
			+"rry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\", '');"
			+"arry[q] = s.split(z, ',');}}var e=new Date();e.setFullYear(e.getFul"
			+"lYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry["
			+"arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,n"
			+"ew Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;va"
			+"r td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.ro"
			+"und((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(a"
			+"rry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{de"
			+"lim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.jo"
			+"in(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
		/* 
		* Plugin: downloadLinkHandler 0.5 - identify and report download links 
		*/
		s.downloadLinkHandler=new Function("p","var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
		
		/*
		 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
		 */
		s.setupDynamicObjectIDs=new Function("var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,false);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semaphore=1}");
		
		s.setOIDs=new Function("e","var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i,a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.repl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0)x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this.s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");
		
		/*
		 * Utility Function: p_gh
		 */
		s.p_gh=new Function("var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
		
		/* 
		* Plugin: exitLinkHandler 0.5 - identify and report exit links 
		*/
		s.exitLinkHandler=new Function("p","var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.linkType='e';else h='';s[n]=t;return h;");
		
		/*
		 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
		 */
		s.getNewRepeat=new Function("d","cn","var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

		if(s.version.indexOf('H')==0){
				/*
				 * Plugin: getPercentPageViewed v1.2
				 */
				s.getPercentPageViewed=new Function("","var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}");
				
				s.getPPVCalc=new Function("","var s=s_c_il["+s._in+"],dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s.wd.document.documentElement.scrollTop||s.wd.document.body.scrollTop),vh=st+vph,pv=Math.round(vh/dh*100),cp=s.c_r('s_ppv');if(pv>100){s.c_w('s_ppv','');}else if(pv>cp){s.c_w('s_ppv',pv);}");
				
				s.getPPVSetup=new Function("","var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s.getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,false);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEvent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCalc);}");
				
				s.getPPVSetup();
		}else{		
				/*
				 * Plugin: getPercentPageViewed v1.71
				 */
				s.getPercentPageViewed=new Function("n",""
				+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
				+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
				+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
				+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
				+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
				+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
				+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
				+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
				+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
				+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
				+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
				+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
				+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
				+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
				+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
				+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
				+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
				+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
				+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
				+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
				+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
				+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
				+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
				+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
				+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
				+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
				+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
				+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
				+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");
		}

		/*
		 * Plugin: getPreviousValue_v1.0 - return previous value of designated
		 *   variable (requires split utility)
		 */
		s.getPreviousValue=new Function("v","c","el","var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

		/*
		 * Plugin: getQueryParam 2.4
		 */
		if(s.version.indexOf('H')==0){
				s.getQueryParam=new Function("p","d","u","h","var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
		}else{
				s.getQueryParam=new Function("p","d","u","h", "return s.Util.getQueryParam(p)");
		}			
		s.p_gpv=new Function("k","u","h","var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
		
		s.p_gvf=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return''");

		/*
		 * Plugin: getTimeParting 2.0 
		 */
		s.getTimeParting=new Function("t","z","y","l","var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=String(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U.substring(2,4);X='090801|101407|111306|121104|131003|140902|150801|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substring(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.getTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.getHours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A}}else{return Z+', '+W}}}");
		
		/*
		 * Plugin: getValOnce_v1.0
		 */
		s.getValOnce=new Function("v","c","e","var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
		
		/*                                                                  
		   * Plugin: getVisitNum - version 3.0
		   */
		s.getVisitNum=new Function("tp","c","c2","var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTime(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {return 'unknown visit number';}}else {if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
		
		s.dimo=new Function("m","y","var d=new Date(y,m+1,0);return d.getDate();");
		
		s.endof=new Function("x","var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=='m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return t;");
		
		
		s.join = new Function("v","p",""
			+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
			+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
			+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
			+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
		/*
		 * Plugin Utility: Replace v1.0
		 */
		s.repl=new Function("x","o","n","var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
		
		/*
		 * Utility Function: split v1.5 (JS 1.0 compatible)
		 */
		s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
		
		/* Module: Media */
		if(s.version.indexOf('H')==0){
			s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if((x<=3||x==5)&&i.to>=0){t=0;if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>=100){x=0;m.e(n,2,-1,0,0,-1,pd);w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
			s.m_i("Media");
		}

}


});
