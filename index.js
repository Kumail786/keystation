function dec(){
  
  var pre = document.getElementById('j-p-quantity-input').value;
  if (pre > 1){
pre--;
document.getElementById('j-p-quantity-input').value = pre;
}
}
function inc(){
  
  var pre = document.getElementById('j-p-quantity-input').value;
  
pre++;
document.getElementById('j-p-quantity-input').value = pre;
}
function feed(){
  document.getElementById('pro').innerHTML = `Coding of FeedBacks will come under this section`;
}
function ship(){
  document.getElementById('pro').innerHTML = `Coding of Shippment will come under this section`;
}
function seller(){
  document.getElementById('pro').innerHTML = `Coding of Sellers will come under this section`;
}
function pro(){
  document.getElementById('pro').innerHTML = `<div class="ui-tab-body ui-switchable-content">
								<div class="ui-tab-pane ui-switchable-panel" data-role="panel" style="display:block;">
									<div class="product-desc" id="j-product-desc">
										<div class="ui-box product-property-main" id="photo-from-buyer">
											<div id="photo-from-ae-buyer"></div>
											<div id="photo-from-taobao-buyer"></div>
										</div>
										<div class="ui-box product-property-main" id="pro">
											<div class="ui-box-title">
												Item specifics
											</div>
											<div class="ui-box-body">
												<ul class="product-property-list util-clearfix">
													<li class="property-item" id="product-prop-284"><span class="propery-title">Brand Name>:</span> <span class="propery-des" title="Women">LONDISK</span></li>
													<li class="property-item" id="product-prop-100004669"><span class="propery-title">Type :</span> <span class="propery-des" title="A-Line">Internal</span></li>
													<li class="property-item" id="product-prop-200000446"><span class="propery-title"> Interface Type:</span> <span class="propery-des" title="Above Knee, Mini">SATAII</span></li>
													<li class="property-item" id="product-prop-200000362"><span class="propery-title">Item Condition</span> <span class="propery-des" title="Off the Shoulder">New</span></li>
													<li class="property-item" ><span class="propery-title">Package</span> <span class="propery-des">Yes</span></li>
													<li class="property-item" id="product-prop-3"><span class="propery-title">Read/ Write Speed</span> <span class="propery-des" title="29">R:490MB/S W:429MB/S</span></li>
													<li class="property-item" id="product-prop-19150"><span class="propery-title">Interface Type</span> <span class="propery-des" title="Lace">SATAII</span></li>
													<li class="property-item" id="product-prop-200000363"><span class="propery-title">Controller</span> <span class="propery-des" title="Natural">SMI2258</span></li>
													<li class="property-item" id="product-prop-326"><span class="propery-title">Support System</span> <span class="propery-des" title="Sexy &amp; Club">Windows Xp,Windows 7,Windows 2003,Windows..</span></li>
													<li class="property-item" id="product-prop-10"><span class="propery-title">MTBF</span> <span class="propery-des" title="Lanon,Spandex">1,500,000 Hours</span></li>
													<li class="property-item" id="product-prop-100007732"><span class="propery-title">Warranty:</span> <span class="propery-des" title="Short">5 years</span></li>
													<li class="property-item" id="product-prop-200000364"><span class="propery-title">Style:</span> <span class="propery-des" title="Slash neck">SSD</span></li>
                                                    
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Size:</span> <span class="propery-des" title="Solid">2.5"</span></li>
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Nand Flash Type:</span> <span class="propery-des" title="Solid">TLC</span></li>
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Model Number:</span> <span class="propery-des" title="Solid">SATA3 2.5 INCH SSD</span></li>
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Controller:</span> <span class="propery-des" title="Solid">SMI2258/SMI2246XT/SMI2256K</span></li>
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Application:</span> <span class="propery-des" title="Solid">Laptop,Desktop</span></li>
                                                    <li class="property-item" id="product-prop-200000329"><span class="propery-title">Size:</span> <span class="propery-des" title="Solid">S2.5inch 100.2x69.8x7.00mm</span></li>
													<li class="property-item" id="product-prop-200000329"><span class="propery-title">Capacity:</span> <span class="propery-des" title="Solid">120/240/480GB/960G</span></li>
													<li class="property-item" id="product-prop-200000329"><span class="propery-title">Write to life:</span> <span class="propery-des" title="Solid">using 8 years if write 100GB every day (32GB)</span></li>
													<li class="property-item" id="product-prop-200000329"><span class="propery-title">Cache:</span> <span class="propery-des" title="Solid">128/256MB</span></li>

												</ul>
												<div >
														<img src="lower.png" id="lower">
													</div>
											</div>
										</div>
										<div class="ui-box transaction-feedback-main" data-spm="1000024" id="j-transaction-feedback">
											<div class="loading32"></div>
										</div>
									</div>
								</div>
								`;
}
function change1(){
  document.getElementById('chan').src  = "choice1.png";
}
function change2(){
  document.getElementById('chan').src  = "main.png";
}
function change3(){
  document.getElementById('chan').src  = "choice3.png";
}
function change4(){
  document.getElementById('chan').src  = "choice3.png";
}
function zoom(){
  document.getElementsByClassName(detail-wrap).innerHTML = "";
}