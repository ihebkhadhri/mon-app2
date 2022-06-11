import React from 'react';

import axios from 'axios';

export default class SidebarComponent extends React.Component {
  
 
  render() {
    return (
      <nav className="pcoded-navbar">
      <div className="pcoded-inner-navbar main-menu">
          <div className="pcoded-navigatio-lavel">Navigation</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu active pcoded-trigger">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                      <span className="pcoded-mtext">Dashboard</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="active">
                          <a href="index-1.htm">
                              <span className="pcoded-mtext">Default</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="dashboard-crm.htm">
                              <span className="pcoded-mtext">CRM</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dashboard-analytics.htm">
                              <span className="pcoded-mtext">Analytics</span>
                              <span className="pcoded-badge label label-info ">NEW</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                      <span className="pcoded-mtext">Page layouts</span>
                      <span className="pcoded-badge label label-warning">NEW</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" pcoded-hasmenu">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Vertical</span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className=" ">
                                  <a href="menu-static.htm">
                                      <span className="pcoded-mtext">Static Layout</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-header-fixed.htm">
                                      <span className="pcoded-mtext">Header Fixed</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-compact.htm">
                                      <span className="pcoded-mtext">Compact</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-sidebar.htm">
                                      <span className="pcoded-mtext">Sidebar Fixed</span>
                                  </a>
                              </li>

                          </ul>
                      </li>
                      <li className=" pcoded-hasmenu">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Horizontal</span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className=" ">
                                  <a href="menu-horizontal-static.htm" target="_blank">
                                      <span className="pcoded-mtext">Static Layout</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-horizontal-fixed.htm" target="_blank">
                                      <span className="pcoded-mtext">Fixed layout</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-horizontal-icon.htm" target="_blank">
                                      <span className="pcoded-mtext">Static With Icon</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="menu-horizontal-icon-fixed.htm" target="_blank">
                                      <span className="pcoded-mtext">Fixed With Icon</span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li className=" ">
                          <a href="menu-bottom.htm">
                              <span className="pcoded-mtext">Bottom Menu</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="box-layout.htm" target="_blank">
                              <span className="pcoded-mtext">Box Layout</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="menu-rtl.htm" target="_blank">
                              <span className="pcoded-mtext">RTL</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="">
                  <a href="navbar-light.htm">
                      <span className="pcoded-micon"><i className="feather icon-menu"></i></span>
                      <span className="pcoded-mtext">Navigation</span>
                  </a>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-layers"></i></span>
                      <span className="pcoded-mtext">Widget</span>
                      <span className="pcoded-badge label label-danger">100+</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="widget-statistic.htm">
                              <span className="pcoded-mtext">Statistic</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="widget-data.htm">
                              <span className="pcoded-mtext">Data</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="widget-chart.htm">
                              <span className="pcoded-mtext">Chart Widget</span>
                          </a>
                      </li>

                  </ul>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">UI Element</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                      <span className="pcoded-mtext">Basic Components</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="alert.htm">
                              <span className="pcoded-mtext">Alert</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="breadcrumb.htm">
                              <span className="pcoded-mtext">Breadcrumbs</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="button.htm">
                              <span className="pcoded-mtext">Button</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="box-shadow.htm">
                              <span className="pcoded-mtext">Box-Shadow</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="accordion.htm">
                              <span className="pcoded-mtext">Accordion</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="generic-className.htm">
                              <span className="pcoded-mtext">Generic className</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="tabs.htm">
                              <span className="pcoded-mtext">Tabs</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="color.htm">
                              <span className="pcoded-mtext">Color</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="label-badge.htm">
                              <span className="pcoded-mtext">Label Badge</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="progress-bar.htm">
                              <span className="pcoded-mtext">Progress Bar</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="preloader.htm">
                              <span className="pcoded-mtext">Pre-Loader</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="list.htm">
                              <span className="pcoded-mtext">List</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="tooltip.htm">
                              <span className="pcoded-mtext">Tooltip And Popover</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="typography.htm">
                              <span className="pcoded-mtext">Typography</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="other.htm">
                              <span className="pcoded-mtext">Other</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-gitlab"></i></span>
                      <span className="pcoded-mtext">Advance Components</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="draggable.htm">
                              <span className="pcoded-mtext">Draggable</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="bs-grid.htm">
                              <span className="pcoded-mtext">Grid Stack</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="light-box.htm">
                              <span className="pcoded-mtext">Light Box</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="modal.htm">
                              <span className="pcoded-mtext">Modal</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="notification.htm">
                              <span className="pcoded-mtext">Notifications</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="notify.htm">
                              <span className="pcoded-mtext">PNOTIFY</span>
                              <span className="pcoded-badge label label-info">NEW</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="rating.htm">
                              <span className="pcoded-mtext">Rating</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="range-slider.htm">
                              <span className="pcoded-mtext">Range Slider</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="slider.htm">
                              <span className="pcoded-mtext">Slider</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="syntax-highlighter.htm">
                              <span className="pcoded-mtext">Syntax Highlighter</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="tour.htm">
                              <span className="pcoded-mtext">Tour</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="treeview.htm">
                              <span className="pcoded-mtext">Tree View</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="nestable.htm">
                              <span className="pcoded-mtext">Nestable</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="toolbar.htm">
                              <span className="pcoded-mtext">Toolbar</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="x-editable.htm">
                              <span className="pcoded-mtext">X-Editable</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-package"></i></span>
                      <span className="pcoded-mtext">Extra Components</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="session-timeout.htm">
                              <span className="pcoded-mtext">Session Timeout</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="session-idle-timeout.htm">
                              <span className="pcoded-mtext">Session Idle Timeout</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="offline.htm">
                              <span className="pcoded-mtext">Offline</span>
                          </a>
                      </li>

                  </ul>
              </li>
              <li className=" ">
                  <a href="animation.htm">
                      <span className="pcoded-micon"><i className="feather icon-aperture rotate-refresh"></i><b>A</b></span>
                      <span className="pcoded-mtext">Animations</span>
                  </a>
              </li>
              <li className=" ">
                  <a href="sticky.htm">
                      <span className="pcoded-micon"><i className="feather icon-cpu"></i></span>
                      <span className="pcoded-mtext">Sticky Notes</span>
                      <span className="pcoded-badge label label-danger">HOT</span>
                  </a>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-command"></i></span>
                      <span className="pcoded-mtext">Icons</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="icon-font-awesome.htm">
                              <span className="pcoded-mtext">Font Awesome</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-themify.htm">
                              <span className="pcoded-mtext">Themify</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-simple-line.htm">
                              <span className="pcoded-mtext">Simple Line Icon</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-ion.htm">
                              <span className="pcoded-mtext">Ion Icon</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-material-design.htm">
                              <span className="pcoded-mtext">Material Design</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-icofonts.htm">
                              <span className="pcoded-mtext">Ico Fonts</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-weather.htm">
                              <span className="pcoded-mtext">Weather Icon</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-typicons.htm">
                              <span className="pcoded-mtext">Typicons</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="icon-flags.htm">
                              <span className="pcoded-mtext">Flags</span>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Forms</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-clipboard"></i></span>
                      <span className="pcoded-mtext">Form Components</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="form-elements-component.htm">
                              <span className="pcoded-mtext">Form Components</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="form-elements-add-on.htm">
                              <span className="pcoded-mtext">Form-Elements-Add-On</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="form-elements-advance.htm">
                              <span className="pcoded-mtext">Form-Elements-Advance</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="form-validation.htm">
                              <span className="pcoded-mtext">Form Validation</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className=" ">
                  <a href="form-picker.htm">
                      <span className="pcoded-micon"><i className="feather icon-edit-1"></i></span>
                      <span className="pcoded-mtext">Form Picker</span>
                      <span className="pcoded-badge label label-warning">NEW</span>
                  </a>
              </li>
              <li className=" ">
                  <a href="form-select.htm">
                      <span className="pcoded-micon"><i className="feather icon-feather"></i></span>
                      <span className="pcoded-mtext">Form Select</span>
                  </a>
              </li>
              <li className=" ">
                  <a href="form-masking.htm">
                      <span className="pcoded-micon"><i className="feather icon-shield"></i></span>
                      <span className="pcoded-mtext">Form Masking</span>
                  </a>
              </li>
              <li className=" ">
                  <a href="form-wizard.htm">
                      <span className="pcoded-micon"><i className="feather icon-tv"></i></span>
                      <span className="pcoded-mtext">Form Wizard</span>
                  </a>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-book"></i></span>
                      <span className="pcoded-mtext">Ready To Use</span>
                      <span className="pcoded-badge label label-danger">HOT</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="ready-cloned-elements-form.htm">
                              <span className="pcoded-mtext">Cloned Elements Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-currency-form.htm">
                              <span className="pcoded-mtext">Currency Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-form-booking.htm">
                              <span className="pcoded-mtext">Booking Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-form-booking-multi-steps.htm">
                              <span className="pcoded-mtext">Booking Multi Steps Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-form-comment.htm">
                              <span className="pcoded-mtext">Comment Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-form-contact.htm">
                              <span className="pcoded-mtext">Contact Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-job-application-form.htm">
                              <span className="pcoded-mtext">Job Application Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-js-addition-form.htm">
                              <span className="pcoded-mtext">JS Addition Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-login-form.htm">
                              <span className="pcoded-mtext">Login Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-popup-modal-form.htm" target="_blank">
                              <span className="pcoded-mtext">Popup Modal Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-registration-form.htm">
                              <span className="pcoded-mtext">Registration Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-review-form.htm">
                              <span className="pcoded-mtext">Review Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-subscribe-form.htm">
                              <span className="pcoded-mtext">Subscribe Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-suggestion-form.htm">
                              <span className="pcoded-mtext">Suggestion Form</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="ready-tabs-form.htm">
                              <span className="pcoded-mtext">Tabs Form</span>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Tables</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-credit-card"></i></span>
                      <span className="pcoded-mtext">Bootstrap Table</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="bs-basic-table.htm">
                              <span className="pcoded-mtext">Basic Table</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="bs-table-sizing.htm">
                              <span className="pcoded-mtext">Sizing Table</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="bs-table-border.htm">
                              <span className="pcoded-mtext">Border Table</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="bs-table-styling.htm">
                              <span className="pcoded-mtext">Styling Table</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-inbox"></i></span>
                      <span className="pcoded-mtext">Data Table</span>
                      <span className="pcoded-mcaret"></span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="dt-basic.htm">
                              <span className="pcoded-mtext">Basic Initialization</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-advance.htm">
                              <span className="pcoded-mtext">Advance Initialization</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-styling.htm">
                              <span className="pcoded-mtext">Styling</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-api.htm">
                              <span className="pcoded-mtext">API</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ajax.htm">
                              <span className="pcoded-mtext">Ajax</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-server-side.htm">
                              <span className="pcoded-mtext">Server Side</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-plugin.htm">
                              <span className="pcoded-mtext">Plug-In</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-data-sources.htm">
                              <span className="pcoded-mtext">Data Sources</span>
                          </a>
                      </li>

                  </ul>
              </li>
              <li className="pcoded-hasmenu">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-server"></i></span>
                      <span className="pcoded-mtext">Data Table Extensions</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className=" ">
                          <a href="dt-ext-autofill.htm">
                              <span className="pcoded-mtext">AutoFill</span>
                          </a>
                      </li>
                      <li className="pcoded-hasmenu">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Button</span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className=" ">
                                  <a href="dt-ext-basic-buttons.htm">
                                      <span className="pcoded-mtext">Basic Button</span>
                                  </a>
                              </li>
                              <li className=" ">
                                  <a href="dt-ext-buttons-html-5-data-export.htm">
                                      <span className="pcoded-mtext">Html-5 Data Export</span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-col-reorder.htm">
                              <span className="pcoded-mtext">Col Reorder</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-fixed-columns.htm">
                              <span className="pcoded-mtext">Fixed Columns</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-fixed-header.htm">
                              <span className="pcoded-mtext">Fixed Header</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-key-table.htm">
                              <span className="pcoded-mtext">Key Table</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-responsive.htm">
                              <span className="pcoded-mtext">Responsive</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-row-reorder.htm">
                              <span className="pcoded-mtext">Row Reorder</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-scroller.htm">
                              <span className="pcoded-mtext">Scroller</span>
                          </a>
                      </li>
                      <li className=" ">
                          <a href="dt-ext-select.htm">
                              <span className="pcoded-mtext">Select Table</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className=" ">
                  <a href="foo-table.htm">
                      <span className="pcoded-micon"><i className="feather icon-hash"></i></span>
                      <span className="pcoded-mtext">FooTable</span>
                  </a>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-airplay"></i></span>
                      <span className="pcoded-mtext">Handson Table</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="handson-appearance.htm">
                              <span className="pcoded-mtext">Appearance</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-data-operation.htm">
                              <span className="pcoded-mtext">Data Operation</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-rows-cols.htm">
                              <span className="pcoded-mtext">Rows Columns</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-columns-only.htm">
                              <span className="pcoded-mtext">Columns Only</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-cell-features.htm">
                              <span className="pcoded-mtext">Cell Features</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-cell-types.htm">
                              <span className="pcoded-mtext">Cell Types</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-integrations.htm">
                              <span className="pcoded-mtext">Integrations</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-rows-only.htm">
                              <span className="pcoded-mtext">Rows Only</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="handson-utilities.htm">
                              <span className="pcoded-mtext">Utilities</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="">
                  <a href="editable-table.htm">
                      <span className="pcoded-micon"><i className="feather icon-edit"></i></span>
                      <span className="pcoded-mtext">Editable Table</span>
                  </a>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Chart And Maps</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span>
                      <span className="pcoded-mtext">Charts</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="chart-google.htm">
                              <span className="pcoded-mtext">Google Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-echart.htm">
                              <span className="pcoded-mtext">Echarts</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-chartjs.htm">
                              <span className="pcoded-mtext">ChartJs</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-list.htm">
                              <span className="pcoded-mtext">List Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-float.htm">
                              <span className="pcoded-mtext">Float Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-knob.htm">
                              <span className="pcoded-mtext">Knob chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-morris.htm">
                              <span className="pcoded-mtext">Morris Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-nvd3.htm">
                              <span className="pcoded-mtext">Nvd3 Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-peity.htm">
                              <span className="pcoded-mtext">Peity Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-radial.htm">
                              <span className="pcoded-mtext">Radial Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-rickshaw.htm">
                              <span className="pcoded-mtext">Rickshaw Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-sparkline.htm">
                              <span className="pcoded-mtext">Sparkline Chart</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="chart-c3.htm">
                              <span className="pcoded-mtext">C3 Chart</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-map"></i></span>
                      <span className="pcoded-mtext">Maps</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="map-google.htm">
                              <span className="pcoded-mtext">Google Maps</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="map-vector.htm">
                              <span className="pcoded-mtext">Vector Maps</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="map-api.htm">
                              <span className="pcoded-mtext">Google Map Search API</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="location.htm">
                              <span className="pcoded-mtext">Location</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="">
                  <a href="libraries\extra-pages\landingpage\index.htm" target="_blank">
                      <span className="pcoded-micon"><i className="feather icon-navigation-2"></i></span>
                      <span className="pcoded-mtext">Landing Page</span>
                  </a>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Pages</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-unlock"></i></span>
                      <span className="pcoded-mtext">Authentication</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="auth-normal-sign-in.htm" target="_blank">
                              <span className="pcoded-mtext">Login With BG Image</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-in-social.htm" target="_blank">
                              <span className="pcoded-mtext">Login With Social Icon</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-in-social-header-footer.htm" target="_blank">
                              <span className="pcoded-mtext">Login Social With Header And Footer</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-normal-sign-in-header-footer.htm" target="_blank">
                              <span className="pcoded-mtext">Login With Header And Footer</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-up.htm" target="_blank">
                              <span className="pcoded-mtext">Registration BG Image</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-up-social.htm" target="_blank">
                              <span className="pcoded-mtext">Registration Social Icon</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-up-social-header-footer.htm" target="_blank">
                              <span className="pcoded-mtext">Registration Social With Header And Footer</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-sign-up-header-footer.htm" target="_blank">
                              <span className="pcoded-mtext">Registration With Header And Footer</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-multi-step-sign-up.htm" target="_blank">
                              <span className="pcoded-mtext">Multi Step Registration</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-reset-password.htm" target="_blank">
                              <span className="pcoded-mtext">Forgot Password</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-lock-screen.htm" target="_blank">
                              <span className="pcoded-mtext">Lock Screen</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="auth-modal.htm" target="_blank">
                              <span className="pcoded-mtext">Modal</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-sliders"></i></span>
                      <span className="pcoded-mtext">Maintenance</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="error.htm">
                              <span className="pcoded-mtext">Error</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="comming-soon.htm">
                              <span className="pcoded-mtext">Comming Soon</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="offline-ui.htm">
                              <span className="pcoded-mtext">Offline UI</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-users"></i></span>
                      <span className="pcoded-mtext">User Profile</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="timeline.htm">
                              <span className="pcoded-mtext">Timeline</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="timeline-social.htm">
                              <span className="pcoded-mtext">Timeline Social</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="user-profile.htm">
                              <span className="pcoded-mtext">User Profile</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="user-card.htm">
                              <span className="pcoded-mtext">User Card</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-shopping-cart"></i></span>
                      <span className="pcoded-mtext">E-Commerce</span>
                      <span className="pcoded-badge label label-danger">NEW</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="product.htm">
                              <span className="pcoded-mtext">Product</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="product-list.htm">
                              <span className="pcoded-mtext">Product List</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="product-edit.htm">
                              <span className="pcoded-mtext">Product Edit</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="product-detail.htm">
                              <span className="pcoded-mtext">Product Detail</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="product-cart.htm">
                              <span className="pcoded-mtext">Product Card</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="product-payment.htm">
                              <span className="pcoded-mtext">Credit Card Form</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-mail"></i></span>
                      <span className="pcoded-mtext">Email</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="email-compose.htm">
                              <span className="pcoded-mtext">Compose Email</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="email-inbox.htm">
                              <span className="pcoded-mtext">Inbox</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="email-read.htm">
                              <span className="pcoded-mtext">Read Mail</span>
                          </a>
                      </li>
                      <li className="pcoded-hasmenu ">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Email Template</span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className="">
                                  <a href="libraries\extra-pages\email-templates\email-welcome.htm">
                                      <span className="pcoded-mtext">Welcome Email</span>
                                  </a>
                              </li>
                              <li className="">
                                  <a href="libraries\extra-pages\email-templates\email-password.htm">
                                      <span className="pcoded-mtext">Reset Password</span>
                                  </a>
                              </li>
                              <li className="">
                                  <a href="libraries\extra-pages\email-templates\email-newsletter.htm">
                                      <span className="pcoded-mtext">Newsletter Email</span>
                                  </a>
                              </li>
                              <li className="">
                                  <a href="libraries\extra-pages\email-templates\email-launch.htm">
                                      <span className="pcoded-mtext">App Launch</span>
                                  </a>
                              </li>
                              <li className="">
                                  <a href="libraries\extra-pages\email-templates\email-activation.htm">
                                      <span className="pcoded-mtext">Activation Code</span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">App</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className=" ">
                  <a href="chat.htm">
                      <span className="pcoded-micon"><i className="feather icon-message-square"></i></span>
                      <span className="pcoded-mtext">Chat</span>
                  </a>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-globe"></i></span>
                      <span className="pcoded-mtext">Social</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="fb-wall.htm">
                              <span className="pcoded-mtext">Wall</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="message.htm">
                              <span className="pcoded-mtext">Messages</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-check-circle"></i></span>
                      <span className="pcoded-mtext">Task</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="task-list.htm">
                              <span className="pcoded-mtext">Task List</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="task-board.htm">
                              <span className="pcoded-mtext">Task Board</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="task-detail.htm">
                              <span className="pcoded-mtext">Task Detail</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="issue-list.htm">
                              <span className="pcoded-mtext">Issue List</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-bookmark"></i></span>
                      <span className="pcoded-mtext">To-Do</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="todo.htm">
                              <span className="pcoded-mtext">To-Do</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="notes.htm">
                              <span className="pcoded-mtext">Notes</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                      <span className="pcoded-mtext">Gallery</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="gallery-grid.htm">
                              <span className="pcoded-mtext">Gallery-Grid</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="gallery-masonry.htm">
                              <span className="pcoded-mtext">Masonry Gallery</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="gallery-advance.htm">
                              <span className="pcoded-mtext">Advance Gallery</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-search"></i><b>S</b></span>
                      <span className="pcoded-mtext">Search</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="search-result.htm">
                              <span className="pcoded-mtext">Simple Search</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="search-result2.htm">
                              <span className="pcoded-mtext">Grouping Search</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-award"></i></span>
                      <span className="pcoded-mtext">Job Search</span>
                      <span className="pcoded-badge label label-danger">NEW</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="job-card-view.htm">
                              <span className="pcoded-mtext">Card View</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="job-details.htm">
                              <span className="pcoded-mtext">Job Detailed</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="job-find.htm">
                              <span className="pcoded-mtext">Job Find</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="job-panel-view.htm">
                              <span className="pcoded-mtext">Job Panel View</span>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Extension</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-file-plus"></i></span>
                      <span className="pcoded-mtext">Editor</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="ck-editor.htm">
                              <span className="pcoded-mtext">CK-Editor</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="wysiwyg-editor.htm">
                              <span className="pcoded-mtext">WYSIWYG Editor</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="ace-editor.htm">
                              <span className="pcoded-mtext">Ace Editor</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="long-press-editor.htm">
                              <span className="pcoded-mtext">Long Press Editor</span>
                          </a>
                      </li>
                  </ul>
              </li>
          </ul>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-file-minus"></i></span>
                      <span className="pcoded-mtext">Invoice</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="invoice.htm">
                              <span className="pcoded-mtext">Invoice</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="invoice-summary.htm">
                              <span className="pcoded-mtext">Invoice Summary</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="invoice-list.htm">
                              <span className="pcoded-mtext">Invoice List</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-calendar"></i></span>
                      <span className="pcoded-mtext">Event Calendar</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="event-full-calender.htm">
                              <span className="pcoded-mtext">Full Calendar</span>
                          </a>
                      </li>
                      <li className="">
                          <a href="event-clndr.htm">
                              <span className="pcoded-mtext">CLNDER</span>
                              <span className="pcoded-badge label label-info">NEW</span>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="">
                  <a href="image-crop.htm">
                      <span className="pcoded-micon"><i className="feather icon-scissors"></i></span>
                      <span className="pcoded-mtext">Image Cropper</span>
                  </a>
              </li>
              <li className="">
                  <a href="file-upload.htm">
                      <span className="pcoded-micon"><i className="feather icon-upload-cloud"></i></span>
                      <span className="pcoded-mtext">File Upload</span>
                  </a>
              </li>
              <li className="">
                  <a href="change-loges.htm">
                      <span className="pcoded-micon"><i className="feather icon-briefcase"></i><b>CL</b></span>
                      <span className="pcoded-mtext">Change Loges</span>
                  </a>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Other</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="pcoded-hasmenu ">
                  <a href="javascript:void(0)">
                      <span className="pcoded-micon"><i className="feather icon-list"></i></span>
                      <span className="pcoded-mtext">Menu Levels</span>
                  </a>
                  <ul className="pcoded-submenu">
                      <li className="">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Menu Level 2.1</span>
                          </a>
                      </li>
                      <li className="pcoded-hasmenu ">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Menu Level 2.2</span>
                          </a>
                          <ul className="pcoded-submenu">
                              <li className="">
                                  <a href="javascript:void(0)">
                                      <span className="pcoded-mtext">Menu Level 3.1</span>
                                  </a>
                              </li>
                          </ul>
                      </li>
                      <li className="">
                          <a href="javascript:void(0)">
                              <span className="pcoded-mtext">Menu Level 2.3</span>
                          </a>
                      </li>

                  </ul>
              </li>
              <li className="">
                  <a href="javascript:void(0)" className="disabled">
                      <span className="pcoded-micon"><i className="feather icon-power"></i></span>
                      <span className="pcoded-mtext">Disabled Menu</span>
                  </a>
              </li>
              <li className="">
                  <a href="sample-page.htm">
                      <span className="pcoded-micon"><i className="feather icon-watch"></i></span>
                      <span className="pcoded-mtext">Sample Page</span>
                  </a>
              </li>
          </ul>
          <div className="pcoded-navigatio-lavel">Support</div>
          <ul className="pcoded-item pcoded-left-item">
              <li className="">
                  <a href="http://html.codedthemes.com/Adminty/doc" target="_blank">
                      <span className="pcoded-micon"><i className="feather icon-monitor"></i></span>
                      <span className="pcoded-mtext">Documentation</span>
                  </a>
              </li>
              <li className="">
                  <a href="#" target="_blank">
                      <span className="pcoded-micon"><i className="feather icon-help-circle"></i></span>
                      <span className="pcoded-mtext">Submit Issue</span>
                  </a>
              </li>
          </ul>
      </div>
  </nav> 
    )
  }
}