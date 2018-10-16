  // Closes the Responsive Menu on Menu Item Click
  'click .navbar-collapse ul li a.toggle-navbar': function(event,template) {
    // is the menu visible
    if(template.$('#bs-example-navbar-collapse-1').is(':visible')) {
      // click the toggle button
      template.$('.menu-toggle:visible').click();
    }
  }