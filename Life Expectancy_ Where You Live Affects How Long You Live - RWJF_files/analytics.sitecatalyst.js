
    CQ_Analytics.registerAfterCallback(function(options) {
      if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
        return false;    // component not in framework, skip SC callback
      CQ_Analytics.Sitecatalyst.saveEvars();
      CQ_Analytics.Sitecatalyst.updateEvars(options);
      CQ_Analytics.Sitecatalyst.updateLinkTrackVars();
      return false;
    }, 10);

    CQ_Analytics.registerAfterCallback(function(options) {
      if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
        return false;    // component not in framework, skip SC callback
      s = s_gi("rwjfnewprod,rwjfglobal");
      if (s.linkTrackVars == "None") {
        s.linkTrackVars = "events";
      } else {
        s.linkTrackVars = s.linkTrackVars + ",events";
      }
      CQ_Analytics.Sitecatalyst.trackLink(options);
      return false;
    }, 100);


    CQ_Analytics.registerAfterCallback(function(options) {
      if(!options.compatibility && $CQ.inArray( options.componentPath, CQ_Analytics.Sitecatalyst.frameworkComponents) < 0 )
        return false;    // component not in framework, skip SC callback
      CQ_Analytics.Sitecatalyst.restoreEvars();
      return false;
    }, 200);

    CQ_Analytics.adhocLinkTracking = "false";

    
    var s_account = "rwjfnewprod,rwjfglobal";
    var s = new AppMeasurement(s_account);
    s.account = s_account;
    
    s.fpCookieDomainPeriods = "2";
    s.trackDownloadLinks= true;
    s.linkDownloadFileTypes= 'exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls';
    s.charSet= 'UTF-8';
    s.linkTrackVars= 'None';
    s.linkExternalFilters= '';
    s.linkTrackEvents= 'None';
    s.trackExternalLinks= true;
    s.linkLeaveQueryString= false;
    s.trackInlineStats= true;
    s.currencyCode= 'USD';
    s.linkInternalFilters= 'javascript:,'+window.location.hostname;
    
    s.visitorNamespace = "rwjf";
    s.trackingServer = "b.rwjf.org";
    s.trackingServerSecure = "bsec.rwjf.org";

    

