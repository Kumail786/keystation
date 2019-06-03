function dec(){
    if (document.getElementById('decreement').value > 0){
    var previous = document.getElementById('decreement').value;
    previous--;
    document.getElementById('decreement').value = previous;
    document.getElementById('decreement').innerHTML = previous;
}

}

function increase() {
    var previous = document.getElementById('decreement').value;
    previous++;
    document.getElementById('decreement').value = previous;
    document.getElementById('decreement').innerHTML = previous;
}
function pro(){
    document.getElementById('prorem').innerHTML = "";
}
function pro(){
    document.getElementById('prorem').innerHTML = `<div id="prorem">
    <h3 id="specifics">Item Specifics</h3>
    <div id="remo">
        <div id="remoleft">
            <table>
            <tr>
            <th>Brand name</th>
            <td>LONDISK</td>
        </tr>
        <tr>
                <th>Type</th>
                <td>Internal</td>
            </tr>
            <tr>
                    <th>Interface Type</th>
                    <td>SATAII</td>
                </tr>
                <tr>
                        <th>Item Condition</th>
                        <td>New</td>
                    </tr>
                    <tr>
                            <th>Package</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                                <th>Read/ Write Speed</th>
                                <td>R:490MB/S W:429MB/S</td>
                            </tr>
                            <tr>
                                    <th>Interface Type</th>
                                    <td>SATAII</td>
                                </tr>
                                <tr>
                                        <th>Controller</th>
                                        <td>SMI2258</td>
                                    </tr>
                                    <tr>
                                            <th>Support System</th>
                                            <td>Windows Xp,Windows 7,Windows 2003,Windows..</td>
                                        </tr>
                                        <tr>
                                                <th>MTBF</th>
                                                <td>1,500,000 Hours</td>
                                            </tr>
                                            <tr>
                                                    <th>Warranty</th>
                                                    <td>5 years</td>
                                                </tr>
                                </table></div><div id="remoright"><table> <tr><th>Style:</th> <td> SSD</td> </tr><tr><th>Application</th><td>Server,Desktop,Laptop</td> </tr> <tr><th>Size</th><td>2.5"</td></tr><tr><th>Nand Flash Type:</th><td>TLC</td></tr><tr><th>Model Number:</th><td>SATA3 2.5 INCH SSD</td></tr><tr><th>Controller:</th><td>SMI2258/SMI2246XT/SMI2256K</td></tr><tr><th>Application:</th><td>Laptop,Desktop</td></tr><tr><th>Size:</th><td>2.5inch 100.2x69.8x7.00mm</td></tr><tr><th>Capacity:</th><td>120/240/480GB/960GB</td></tr><th>Write to life:</th><td>using 8 years if write 100GB every day (32GB)</td></tr><tr><th>Cache:</th><td>128/256MB</td></tr></table></div><img src="lastimg.png" id="last"></div></div>`;
}
function feed(){
    document.getElementById('prorem').innerHTML = `<div id="transction-feedback" class="feedback-container" data-widget-cid="widget-1">
    <div class="rate-detail util-clearfix">
        <ul class="rate-list">
            <li>
                <span class="r-title">5 Stars</span>
                <span class="r-graph">
                    <b class="r-graph-scroller" style="width:100.0%;"></b>
                </span>
                <span class="r-num fb-star-list-href" data="5 Stars">100%</span>
            </li>
            <li>
                <span class="r-title">4 Stars</span>
                <span class="r-graph">
                    <b class="r-graph-scroller" style="width:0.0%;"></b>
                </span>
                <span class="r-num fb-star-list-href" data="4 Stars">0%</span>
            </li>
            <li>
                <span class="r-title">3 Stars</span>
                <span class="r-graph">
                    <b class="r-graph-scroller" style="width:0.0%;"></b>
                </span>
                <span class="r-num fb-star-list-href" data="3 Stars">0%</span>
            </li>
            <li>
                <span class="r-title">2 Stars</span>
                <span class="r-graph">
                    <b class="r-graph-scroller" style="width:0.0%;"></b>
                </span>
                <span class="r-num fb-star-list-href" data="2 Stars">0%</span>
            </li>
            <li>
                <span class="r-title">1 Star</span>
                <span class="r-graph" data-spm-anchor-id="0.0.0.i0.5f2bzBlQzBlQrR">
                    <b class="r-graph-scroller" style="width:0.0%;"></b>
                </span>
                <span class="r-num fb-star-list-href" data="1 Stars">0%</span>
            </li>
        </ul>
        <div class="rate-score">
            <div class="star-view-big"><span style="width:100.0%"></span></div>
            <div class="star-rate-des">
                <p class="r-score-des">Average Star Rating: 
					<em></em>
					(3 votes)
				</p>
								<span class="r-score-tips" id="j-score-tips"></span>
            </div>
			<div id="scoreTipsContentId" style="display:none;position:absolute;" class="tip-popup left">
				<strong><span class="t">Note:</span></strong>
				<span class="c">All information displayed is based on feedback received for this product over the past 6 months. To learn more about our Feedback Rating System,
					<a href="//help.aliexpress.com/feedback_policy.html" target="_blank">click here</a>
				</span>
			</div>
        </div>
    </div>
    <div class="filter-wrap clearfix">
		        		<span class="f-title">All Feedback </span>
        <div class="f-star-dropdown">
            			<span class="fb-star-selector">All Stars (<em>3</em>)</span>
			<div id="filter_star_list" class="fb-star-list">
                <ul>
                    <li class="active"><a class="fb-star-list-href" data="all Stars" href="javascript:void(0);" rel="nofollow">All Stars</a></li>
                    <li><a class="fb-star-list-href" data="5 Stars" href="javascript:void(0);" rel="nofollow">5 Stars</a></li>
                    <li><a class="fb-star-list-href" data="4 Stars" href="javascript:void(0);" rel="nofollow">4 Stars</a></li>
                    <li><a class="fb-star-list-href" data="3 Stars" href="javascript:void(0);" rel="nofollow">3 Stars</a></li>
                    <li><a class="fb-star-list-href" data="2 Stars" href="javascript:void(0);" rel="nofollow">2 Stars</a></li>
                    <li><a class="fb-star-list-href" data="1 Stars" href="javascript:void(0);" rel="nofollow">1 Star</a></li>
                    <li class="separator"><hr></li>
                    <li><a class="fb-star-list-href" data="All positive" href="javascript:void(0);" rel="nofollow">All Positive</a></li>
                    <li><a class="fb-star-list-href" data="All cricital" href="javascript:void(0);" rel="nofollow">All Negative </a></li>
																	                    												                    												                    												                    												                    												                    												                                    </ul>
            </div>
        </div>
        <div class="f-filter-list">
            <label>
									<input id="cb-withPictures-filter" type="checkbox" value="withPictures">With Pictures  (<em>0</em>)
												</label>
            <label style="f-filter-personal-info">
									<input id="cb-withPersonalInfo-filter" type="checkbox" value="withPersonalInfo">With Personal Information(<em>0</em>)
												</label>
            <label class="f-filter-additional">
									<input id="cb-withAdditionalFeedback-filter" type="checkbox" value="withAdditionalFeedback">Additional Feedback (<em>0</em>)
												</label>
        </div>
		    </div>
    <div class="feedback-action">
		            <div class="fb-filter-country"><label>
    			    				<input id="cb-onlyFromMyCountry-filter" type="checkbox" value="onlyFromMyCountry">View reviews from United States
    				    			    		</label></div>
		
		                     <div id="simple-pager" class="util-clearfix simple-pager">
    <div class="ui-pagination ui-pagination-front ui-pagination-pager util-right">
                            <span href="#" class="ui-pagination-prev ui-pagination-disabled">Previous</span>
        
                            <span href="#" class="ui-pagination-next ui-pagination-disabled">Next</span>
        
                <label class="ui-label">1/1</label>
    </div>
</div>         		     		            <div class="fb-sort">
    			                <span class="fb-sort-selector">Sort by default</span>
                <div class="fb-sort-list" id="sort-by-container">
                    <ul>
    					    						    						<li><a class="fb-sort-list-href" data="sortlarest@feedback" href="javascript:void(0);" rel="nofollow">Sort by latest</a></li>
                                            </ul>
                </div>
            </div>
                	        <div class="fb-translate">
    	        	<label>
    	    			<input id="cb-translate" type="checkbox" value="translate" checked="">Translate to English
    	    		</label>
    	        </div>
    				    </div>
    <div class="feedback-list-wrap">
						        <div class="feedback-item clearfix">
			            <div class="fb-user-info">
									<span class="user-name">
						    						<a href="//feedback.aliexpress.com/display/detail.htm?ownerMemberId=LXc4nvgBhWJuhUDY9bKwWA==&amp;memberType=buyer" target="_blank" rel="nofollow" name="member_detail">W***e</a>
    					    				</span>
								<div class="user-country"><b class="css_flag css_ua">UA</b></div>            </div>
			            <div class="fb-main">
				                <div class="f-rate-info">
					<span class="star-view"><span style="width:100%"></span></span>
										<div class="j-digg-info util-right"><div class="thf-digg"><a class="thf-feedback-digg-btn" href="javascript:;"><span class="r-digg-img j-digg-enable-img"></span></a>(<span class="r-digg-count">1</span>)</div></div>
											<input type="hidden" class="digg-token" value="">
						<input id="feedback-203108701459" class="feedback-id" type="hidden" value="203108701459">
									</div>
				                <div class="user-order-info">
                    																									     <span class="first">
									<strong>Color:</strong>
																			WHITE
																	</span>
                                																											     <span>
									<strong>Size:</strong>
																			M
																	</span>
                                																																												<span>
						  <strong>Logistics:</strong>
                          China Post Registered Air Mail
                        </span>
                        																				</div>
				                                                                                				                <div class="f-content">
					                    <dl class="buyer-review">
                        <dt class="buyer-feedback">
															<span>wonderful dress fast arrive super all goods have many thanks
</span>
													</dt>
						                        <dd class="r-time">18 Mar 2019 00:15</dd>
                    </dl>
																														                </div>
            </div>
        </div>
				        <div class="feedback-item clearfix">
			            <div class="fb-user-info">
									<span class="user-name">
						    						<a href="//feedback.aliexpress.com/display/detail.htm?ownerMemberId=tFaKSn++ykmSKt4CUSrmrA==&amp;memberType=buyer" target="_blank" rel="nofollow" name="member_detail">R***r</a>
    					    				</span>
								<div class="user-country"><b class="css_flag css_ru">RU</b></div>            </div>
			            <div class="fb-main">
				                <div class="f-rate-info">
					<span class="star-view"><span style="width:100%"></span></span>
										<div class="j-digg-info util-right"><div class="thf-digg"><a class="thf-feedback-digg-btn" href="javascript:;"><span class="r-digg-img j-digg-enable-img"></span></a>(<span class="r-digg-count">3</span>)</div></div>
											<input type="hidden" class="digg-token" value="">
						<input id="feedback-203131563722" class="feedback-id" type="hidden" value="203131563722">
									</div>
				                <div class="user-order-info">
                    																									     <span class="first">
									<strong>Color:</strong>
																			WHITE
																	</span>
                                																											     <span>
									<strong>Size:</strong>
																			M
																	</span>
                                																																												<span>
						  <strong>Logistics:</strong>
                          ePacket
                        </span>
                        																				</div>
				                                                                                				                <div class="f-content">
					                  
			 <div id="complex-pager" class="util-clearfix complex-pager">
  <div class="ui-pagination ui-pagination-front ui-pagination-body util-clearfix">      
        <div class="ui-pagination-navi util-left">
			                            <span class="ui-pagination-prev ui-pagination-disabled">&lt;&lt; Previous</span>
			
                                                                                    <span class="ui-pagination-active">1</span>
                                                
			                            <span class="ui-pagination-next ui-pagination-disabled">Next &gt;&gt;</span>
			      </div>
                                                                          
  </div>
</div>	</div>`
}
function sell(){
    document.getElementById('prorem').innerHTML = `
        <tbody>
	 	         <tr>
            <td width="80" data-spm-anchor-id="2114.10010108.1000021.i0.4d7450cfZsWE7k">Return<br> Policy</td>
            <td class="s-td-row"><p class="s-serve sp-1">If the product you receive is not as described or low quality, the seller promises that you may return it before order completion (when you click ‘Confirm Order Received’ or exceed confirmation timeframe) and receive a full refund. The return shipping fee will be paid by you. Or, you can choose to keep the product and agree the refund amount directly with the seller.</p><p>⠀</p></td>
        </tr>
	         <tr class="com-seller-guarantees">
            <td>Seller<br> Service</td>
            <td class="s-td-row">
                <ul>
					<li class="s-serve sp-5">
                        <em>On-time Delivery</em>If you do not receive your purchase within <span class="promise-time-cont">15</span> days, you can ask for a full refund before order completion (when you click ‘Confirm Order Received’ or exceed confirmation timeframe).                    </li>
    				        			                </ul>
            </td>
        </tr>
		
    </tbody>
    `
}
function ship(){
    document.getElementById('prorem').innerHTML = `<div class="ui-box shipping-info-main">
    <div class="ui-box-title">Shipping</div>
    <div class="ui-box-body">
        <div class="caption-title">Calculate your shipping cost by country/region and quantity.</div>
        <div class="caption-main util-clearfix">
            <span class="c-desc-title">Quantity:</span>
            <input type="number" data-role="quantity" min="1" max="9999" class="txt-quantity-input" maxlength="5" value="1">
            <span class="c-desc-title">Ship to:</span>
            <div id="j-pnl-country-selector" class="c-pnl-selector address-selector" data-widget-cid="widget-63"><a href="#" class="address-select-trigger" data-role="country" style="width: 178px;">
      <span class="css_flag css_us"><span class="shipping-text">United States</span></span>
    </a><a href="#" class="address-select-trigger" data-role="province" style="display: none; width: 98px;">
      <span class="shipping-text"></span>
    </a><a href="#" class="address-select-trigger" data-role="city" style="display: none; width: 98px;">
      <span class="shipping-text"></span>
    </a><div class="address-select" data-widget-cid="widget-64" style="width: 190px; z-index: 99; display: none; position: absolute; left: -9999px; top: -9999px;">
<div class="filter-list-container">
        <input type="text" placeholder="Search" class="filter-input">
        <i class="seach"></i>
</div>
<ul class="address-select-content" data-role="content">   
    <li data-role="item" class="address-select-item " data-code="af" data-name="Afghanistan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_af"><span class="shipping-text">Afghanistan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ala" data-name="Aland Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ala"><span class="shipping-text">Aland Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="al" data-name="Albania" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_al"><span class="shipping-text">Albania</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gba" data-name="Alderney" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gba"><span class="shipping-text">Alderney</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="dz" data-name="Algeria" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_dz"><span class="shipping-text">Algeria</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="as" data-name="American Samoa" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_as"><span class="shipping-text">American Samoa</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ad" data-name="Andorra" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ad"><span class="shipping-text">Andorra</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ao" data-name="Angola" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ao"><span class="shipping-text">Angola</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ai" data-name="Anguilla" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ai"><span class="shipping-text">Anguilla</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ag" data-name="Antigua and Barbuda" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ag"><span class="shipping-text">Antigua and Barbuda</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ar" data-name="Argentina" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ar"><span class="shipping-text">Argentina</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="am" data-name="Armenia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_am"><span class="shipping-text">Armenia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="aw" data-name="Aruba" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_aw"><span class="shipping-text">Aruba</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="asc" data-name="Ascension Island" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_asc"><span class="shipping-text">Ascension Island</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="au" data-name="Australia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_au"><span class="shipping-text">Australia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="at" data-name="Austria" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_at"><span class="shipping-text">Austria</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="az" data-name="Azerbaijan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_az"><span class="shipping-text">Azerbaijan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bs" data-name="Bahamas" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bs"><span class="shipping-text">Bahamas</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bh" data-name="Bahrain" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bh"><span class="shipping-text">Bahrain</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bd" data-name="Bangladesh" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bd"><span class="shipping-text">Bangladesh</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bb" data-name="Barbados" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bb"><span class="shipping-text">Barbados</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="by" data-name="Belarus" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_by"><span class="shipping-text">Belarus</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="be" data-name="Belgium" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_be"><span class="shipping-text">Belgium</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bz" data-name="Belize" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bz"><span class="shipping-text">Belize</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bj" data-name="Benin" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bj"><span class="shipping-text">Benin</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bm" data-name="Bermuda" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bm"><span class="shipping-text">Bermuda</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bt" data-name="Bhutan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bt"><span class="shipping-text">Bhutan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bo" data-name="Bolivia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bo"><span class="shipping-text">Bolivia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ba" data-name="Bosnia and Herzegovina" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ba"><span class="shipping-text">Bosnia and Herzegovina</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bw" data-name="Botswana" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bw"><span class="shipping-text">Botswana</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="br" data-name="Brazil" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_br"><span class="shipping-text">Brazil</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bg" data-name="Bulgaria" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bg"><span class="shipping-text">Bulgaria</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bf" data-name="Burkina Faso" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bf"><span class="shipping-text">Burkina Faso</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bi" data-name="Burundi" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bi"><span class="shipping-text">Burundi</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kh" data-name="Cambodia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kh"><span class="shipping-text">Cambodia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cm" data-name="Cameroon" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cm"><span class="shipping-text">Cameroon</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ca" data-name="Canada" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ca"><span class="shipping-text">Canada</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cv" data-name="Cape Verde" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cv"><span class="shipping-text">Cape Verde</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bq" data-name="Caribbean Netherlands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bq"><span class="shipping-text">Caribbean Netherlands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ky" data-name="Cayman Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ky"><span class="shipping-text">Cayman Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cf" data-name="Central African Republic" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cf"><span class="shipping-text">Central African Republic</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="td" data-name="Chad" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_td"><span class="shipping-text">Chad</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cl" data-name="Chile" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cl"><span class="shipping-text">Chile</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cx" data-name="Christmas Island" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cx"><span class="shipping-text">Christmas Island</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cc" data-name="Cocos (Keeling) Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cc"><span class="shipping-text">Cocos (Keeling) Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="co" data-name="Colombia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_co"><span class="shipping-text">Colombia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="km" data-name="Comoros" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_km"><span class="shipping-text">Comoros</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="zr" data-name="Congo, The Democratic Republic Of The" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_zr"><span class="shipping-text">Congo, The Democratic Republic Of The</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cg" data-name="Congo, The Republic of Congo" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cg"><span class="shipping-text">Congo, The Republic of Congo</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ck" data-name="Cook Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ck"><span class="shipping-text">Cook Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cr" data-name="Costa Rica" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cr"><span class="shipping-text">Costa Rica</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ci" data-name="Cote D'Ivoire" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ci"><span class="shipping-text">Cote D'Ivoire</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="hr" data-name="Croatia (local name: Hrvatska)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_hr"><span class="shipping-text">Croatia (local name: Hrvatska)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cw" data-name="Curacao" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cw"><span class="shipping-text">Curacao</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cy" data-name="Cyprus" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cy"><span class="shipping-text">Cyprus</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="cz" data-name="Czech Republic" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_cz"><span class="shipping-text">Czech Republic</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="dk" data-name="Denmark" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_dk"><span class="shipping-text">Denmark</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="dj" data-name="Djibouti" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_dj"><span class="shipping-text">Djibouti</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="dm" data-name="Dominica" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_dm"><span class="shipping-text">Dominica</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="do" data-name="Dominican Republic" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_do"><span class="shipping-text">Dominican Republic</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ec" data-name="Ecuador" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ec"><span class="shipping-text">Ecuador</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="eg" data-name="Egypt" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_eg"><span class="shipping-text">Egypt</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sv" data-name="El Salvador" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sv"><span class="shipping-text">El Salvador</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gq" data-name="Equatorial Guinea" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gq"><span class="shipping-text">Equatorial Guinea</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="er" data-name="Eritrea" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_er"><span class="shipping-text">Eritrea</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ee" data-name="Estonia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ee"><span class="shipping-text">Estonia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="et" data-name="Ethiopia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_et"><span class="shipping-text">Ethiopia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fk" data-name="Falkland Islands (Malvinas)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fk"><span class="shipping-text">Falkland Islands (Malvinas)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fo" data-name="Faroe Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fo"><span class="shipping-text">Faroe Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fj" data-name="Fiji" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fj"><span class="shipping-text">Fiji</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fi" data-name="Finland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fi"><span class="shipping-text">Finland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fr" data-name="France" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fr"><span class="shipping-text">France</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gf" data-name="French Guiana" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gf"><span class="shipping-text">French Guiana</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pf" data-name="French Polynesia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pf"><span class="shipping-text">French Polynesia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ga" data-name="Gabon" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ga"><span class="shipping-text">Gabon</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gm" data-name="Gambia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gm"><span class="shipping-text">Gambia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ge" data-name="Georgia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ge"><span class="shipping-text">Georgia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="de" data-name="Germany" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_de"><span class="shipping-text">Germany</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gh" data-name="Ghana" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gh"><span class="shipping-text">Ghana</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gi" data-name="Gibraltar" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gi"><span class="shipping-text">Gibraltar</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gr" data-name="Greece" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gr"><span class="shipping-text">Greece</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gl" data-name="Greenland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gl"><span class="shipping-text">Greenland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gd" data-name="Grenada" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gd"><span class="shipping-text">Grenada</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gp" data-name="Guadeloupe" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gp"><span class="shipping-text">Guadeloupe</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gu" data-name="Guam" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gu"><span class="shipping-text">Guam</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gt" data-name="Guatemala" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gt"><span class="shipping-text">Guatemala</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ggy" data-name="Guernsey" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ggy"><span class="shipping-text">Guernsey</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gn" data-name="Guinea" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gn"><span class="shipping-text">Guinea</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gw" data-name="Guinea-Bissau" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gw"><span class="shipping-text">Guinea-Bissau</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="gy" data-name="Guyana" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_gy"><span class="shipping-text">Guyana</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ht" data-name="Haiti" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ht"><span class="shipping-text">Haiti</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="hn" data-name="Honduras" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_hn"><span class="shipping-text">Honduras</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="hk" data-name="Hong Kong,China" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_hk"><span class="shipping-text">Hong Kong,China</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="hu" data-name="Hungary" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_hu"><span class="shipping-text">Hungary</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="is" data-name="Iceland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_is"><span class="shipping-text">Iceland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="in" data-name="India" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_in"><span class="shipping-text">India</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="id" data-name="Indonesia" data-needchildren="true" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_id"><span class="shipping-text">Indonesia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="iq" data-name="Iraq" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_iq"><span class="shipping-text">Iraq</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ie" data-name="Ireland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ie"><span class="shipping-text">Ireland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="il" data-name="Israel" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_il"><span class="shipping-text">Israel</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="it" data-name="Italy" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_it"><span class="shipping-text">Italy</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="jm" data-name="Jamaica" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_jm"><span class="shipping-text">Jamaica</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="jp" data-name="Japan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_jp"><span class="shipping-text">Japan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="jey" data-name="Jersey" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_jey"><span class="shipping-text">Jersey</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="jo" data-name="Jordan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_jo"><span class="shipping-text">Jordan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kz" data-name="Kazakhstan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kz"><span class="shipping-text">Kazakhstan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ke" data-name="Kenya" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ke"><span class="shipping-text">Kenya</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ki" data-name="Kiribati" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ki"><span class="shipping-text">Kiribati</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kr" data-name="Korea" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kr"><span class="shipping-text">Korea</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ks" data-name="Kosovo" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ks"><span class="shipping-text">Kosovo</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kw" data-name="Kuwait" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kw"><span class="shipping-text">Kuwait</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kg" data-name="Kyrgyzstan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kg"><span class="shipping-text">Kyrgyzstan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="la" data-name="Lao People's Democratic Republic" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_la"><span class="shipping-text">Lao People's Democratic Republic</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lv" data-name="Latvia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lv"><span class="shipping-text">Latvia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lb" data-name="Lebanon" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lb"><span class="shipping-text">Lebanon</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ls" data-name="Lesotho" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ls"><span class="shipping-text">Lesotho</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lr" data-name="Liberia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lr"><span class="shipping-text">Liberia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ly" data-name="Libya" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ly"><span class="shipping-text">Libya</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="li" data-name="Liechtenstein" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_li"><span class="shipping-text">Liechtenstein</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lt" data-name="Lithuania" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lt"><span class="shipping-text">Lithuania</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lu" data-name="Luxembourg" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lu"><span class="shipping-text">Luxembourg</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mo" data-name="Macau,China" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mo"><span class="shipping-text">Macau,China</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mk" data-name="Macedonia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mk"><span class="shipping-text">Macedonia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mg" data-name="Madagascar" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mg"><span class="shipping-text">Madagascar</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mw" data-name="Malawi" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mw"><span class="shipping-text">Malawi</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="my" data-name="Malaysia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_my"><span class="shipping-text">Malaysia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mv" data-name="Maldives" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mv"><span class="shipping-text">Maldives</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ml" data-name="Mali" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ml"><span class="shipping-text">Mali</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mt" data-name="Malta" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mt"><span class="shipping-text">Malta</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mh" data-name="Marshall Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mh"><span class="shipping-text">Marshall Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mq" data-name="Martinique" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mq"><span class="shipping-text">Martinique</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mr" data-name="Mauritania" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mr"><span class="shipping-text">Mauritania</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mu" data-name="Mauritius" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mu"><span class="shipping-text">Mauritius</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="yt" data-name="Mayotte" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_yt"><span class="shipping-text">Mayotte</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mx" data-name="Mexico" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mx"><span class="shipping-text">Mexico</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="fm" data-name="Micronesia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_fm"><span class="shipping-text">Micronesia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="md" data-name="Moldova" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_md"><span class="shipping-text">Moldova</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mc" data-name="Monaco" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mc"><span class="shipping-text">Monaco</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mn" data-name="Mongolia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mn"><span class="shipping-text">Mongolia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mne" data-name="Montenegro" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mne"><span class="shipping-text">Montenegro</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ms" data-name="Montserrat" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ms"><span class="shipping-text">Montserrat</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ma" data-name="Morocco" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ma"><span class="shipping-text">Morocco</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mz" data-name="Mozambique" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mz"><span class="shipping-text">Mozambique</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mm" data-name="Myanmar" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mm"><span class="shipping-text">Myanmar</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="na" data-name="Namibia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_na"><span class="shipping-text">Namibia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nr" data-name="Nauru" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nr"><span class="shipping-text">Nauru</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="bn" data-name="Negara Brunei Darussalam" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_bn"><span class="shipping-text">Negara Brunei Darussalam</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="np" data-name="Nepal" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_np"><span class="shipping-text">Nepal</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nl" data-name="Netherlands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nl"><span class="shipping-text">Netherlands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="an" data-name="Netherlands Antilles" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_an"><span class="shipping-text">Netherlands Antilles</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nc" data-name="New Caledonia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nc"><span class="shipping-text">New Caledonia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nz" data-name="New Zealand" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nz"><span class="shipping-text">New Zealand</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ni" data-name="Nicaragua" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ni"><span class="shipping-text">Nicaragua</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ne" data-name="Niger" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ne"><span class="shipping-text">Niger</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ng" data-name="Nigeria" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ng"><span class="shipping-text">Nigeria</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nu" data-name="Niue" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nu"><span class="shipping-text">Niue</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="nf" data-name="Norfolk Island" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_nf"><span class="shipping-text">Norfolk Island</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="mp" data-name="Northern Mariana Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_mp"><span class="shipping-text">Northern Mariana Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="no" data-name="Norway" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_no"><span class="shipping-text">Norway</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="om" data-name="Oman" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_om"><span class="shipping-text">Oman</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="other" data-name="Other Country" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_other"><span class="shipping-text">Other Country</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pk" data-name="Pakistan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pk"><span class="shipping-text">Pakistan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pw" data-name="Palau" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pw"><span class="shipping-text">Palau</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ps" data-name="Palestine" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ps"><span class="shipping-text">Palestine</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pa" data-name="Panama" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pa"><span class="shipping-text">Panama</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pg" data-name="Papua New Guinea" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pg"><span class="shipping-text">Papua New Guinea</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="py" data-name="Paraguay" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_py"><span class="shipping-text">Paraguay</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pe" data-name="Peru" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pe"><span class="shipping-text">Peru</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ph" data-name="Philippines" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ph"><span class="shipping-text">Philippines</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pl" data-name="Poland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pl"><span class="shipping-text">Poland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pt" data-name="Portugal" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pt"><span class="shipping-text">Portugal</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pr" data-name="Puerto Rico" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pr"><span class="shipping-text">Puerto Rico</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="qa" data-name="Qatar" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_qa"><span class="shipping-text">Qatar</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="re" data-name="Reunion" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_re"><span class="shipping-text">Reunion</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ro" data-name="Romania" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ro"><span class="shipping-text">Romania</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ru" data-name="Russian Federation" data-needchildren="true" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ru"><span class="shipping-text">Russian Federation</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="rw" data-name="Rwanda" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_rw"><span class="shipping-text">Rwanda</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="blm" data-name="Saint Barthelemy" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_blm"><span class="shipping-text">Saint Barthelemy</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="kn" data-name="Saint Kitts and Nevis" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_kn"><span class="shipping-text">Saint Kitts and Nevis</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lc" data-name="Saint Lucia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lc"><span class="shipping-text">Saint Lucia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="maf" data-name="Saint Martin" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_maf"><span class="shipping-text">Saint Martin</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="vc" data-name="Saint Vincent and the Grenadines" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_vc"><span class="shipping-text">Saint Vincent and the Grenadines</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ws" data-name="Samoa" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ws"><span class="shipping-text">Samoa</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sm" data-name="San Marino" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sm"><span class="shipping-text">San Marino</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="st" data-name="Sao Tome and Principe" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_st"><span class="shipping-text">Sao Tome and Principe</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sa" data-name="Saudi Arabia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sa"><span class="shipping-text">Saudi Arabia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sn" data-name="Senegal" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sn"><span class="shipping-text">Senegal</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="srb" data-name="Serbia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_srb"><span class="shipping-text">Serbia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sc" data-name="Seychelles" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sc"><span class="shipping-text">Seychelles</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sl" data-name="Sierra Leone" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sl"><span class="shipping-text">Sierra Leone</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sg" data-name="Singapore" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sg"><span class="shipping-text">Singapore</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sx" data-name="Sint Maarten (Netherlands)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sx"><span class="shipping-text">Sint Maarten (Netherlands)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sk" data-name="Slovakia (Slovak Republic)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sk"><span class="shipping-text">Slovakia (Slovak Republic)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="si" data-name="Slovenia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_si"><span class="shipping-text">Slovenia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sb" data-name="Solomon Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sb"><span class="shipping-text">Solomon Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="so" data-name="Somalia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_so"><span class="shipping-text">Somalia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="za" data-name="South Africa" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_za"><span class="shipping-text">South Africa</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sgs" data-name="South Georgia and the South Sandwich Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sgs"><span class="shipping-text">South Georgia and the South Sandwich Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ss" data-name="South Sudan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ss"><span class="shipping-text">South Sudan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="es" data-name="Spain" data-needchildren="true" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_es"><span class="shipping-text">Spain</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="lk" data-name="Sri Lanka" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_lk"><span class="shipping-text">Sri Lanka</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="pm" data-name="St. Pierre and Miquelon" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_pm"><span class="shipping-text">St. Pierre and Miquelon</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sr" data-name="Suriname" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sr"><span class="shipping-text">Suriname</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="sz" data-name="Swaziland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_sz"><span class="shipping-text">Swaziland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="se" data-name="Sweden" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_se"><span class="shipping-text">Sweden</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ch" data-name="Switzerland" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ch"><span class="shipping-text">Switzerland</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tw" data-name="Taiwan,China" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tw"><span class="shipping-text">Taiwan,China</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tj" data-name="Tajikistan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tj"><span class="shipping-text">Tajikistan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tz" data-name="Tanzania" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tz"><span class="shipping-text">Tanzania</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="th" data-name="Thailand" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_th"><span class="shipping-text">Thailand</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tls" data-name="Timor-Leste" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tls"><span class="shipping-text">Timor-Leste</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tg" data-name="Togo" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tg"><span class="shipping-text">Togo</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="to" data-name="Tonga" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_to"><span class="shipping-text">Tonga</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tt" data-name="Trinidad and Tobago" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tt"><span class="shipping-text">Trinidad and Tobago</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tn" data-name="Tunisia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tn"><span class="shipping-text">Tunisia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tr" data-name="Turkey" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tr"><span class="shipping-text">Turkey</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tm" data-name="Turkmenistan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tm"><span class="shipping-text">Turkmenistan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tc" data-name="Turks and Caicos Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tc"><span class="shipping-text">Turks and Caicos Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="tv" data-name="Tuvalu" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_tv"><span class="shipping-text">Tuvalu</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ug" data-name="Uganda" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ug"><span class="shipping-text">Uganda</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ua" data-name="Ukraine" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ua"><span class="shipping-text">Ukraine</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ae" data-name="United Arab Emirates" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ae"><span class="shipping-text">United Arab Emirates</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="uk" data-name="United Kingdom" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_uk"><span class="shipping-text">United Kingdom</span></span>
    </li>
    <li data-role="item" class="address-select-item  address-select-selected" data-code="us" data-name="United States" data-needchildren="false" data-defaultselected="true" data-selected="true" data-disabled="false">
      <span class="css_flag css_us"><span class="shipping-text">United States</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="uy" data-name="Uruguay" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_uy"><span class="shipping-text">Uruguay</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="uz" data-name="Uzbekistan" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_uz"><span class="shipping-text">Uzbekistan</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="vu" data-name="Vanuatu" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_vu"><span class="shipping-text">Vanuatu</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="va" data-name="Vatican City State (Holy See)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_va"><span class="shipping-text">Vatican City State (Holy See)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ve" data-name="Venezuela" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ve"><span class="shipping-text">Venezuela</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="vn" data-name="Vietnam" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_vn"><span class="shipping-text">Vietnam</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="vg" data-name="Virgin Islands (British)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_vg"><span class="shipping-text">Virgin Islands (British)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="vi" data-name="Virgin Islands (U.S.)" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_vi"><span class="shipping-text">Virgin Islands (U.S.)</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="wf" data-name="Wallis And Futuna Islands" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_wf"><span class="shipping-text">Wallis And Futuna Islands</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="ye" data-name="Yemen" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_ye"><span class="shipping-text">Yemen</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="zm" data-name="Zambia" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_zm"><span class="shipping-text">Zambia</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="eaz" data-name="Zanzibar" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_eaz"><span class="shipping-text">Zanzibar</span></span>
    </li>
    <li data-role="item" class="address-select-item " data-code="zw" data-name="Zimbabwe" data-needchildren="false" data-defaultselected="false" data-selected="false" data-disabled="false">
      <span class="css_flag css_zw"><span class="shipping-text">Zimbabwe</span></span>
    </li>
</ul>
</div><div class="address-select" data-widget-cid="widget-65" style="width: 110px; z-index: 99; display: none; position: absolute; left: -9999px; top: -9999px;">
<div class="filter-list-container">
    <input type="text" placeholder="Search" class="filter-input">
    <i class="seach"></i>
</div>
<ul class="address-select-content" data-role="content">
    <li data-role="item" class="address-select-item  address-select-selected" data-code="" data-name="" data-defaultselected="false" data-selected="true" data-disabled="false">
      <span class="shipping-text"></span>
    </li>
</ul>
</div><div class="address-select" data-widget-cid="widget-66" style="width: 110px; z-index: 99; display: none; position: absolute; left: -9999px; top: -9999px;">
<div class="filter-list-container">
    <input type="text" placeholder="Search" class="filter-input">
    <i class="seach"></i>
</div>
<ul class="address-select-content" data-role="content">
    <li data-role="item" class="address-select-item  address-select-selected" data-code="" data-name="" data-defaultselected="false" data-selected="true" data-disabled="false">
      <span class="shipping-text"></span>
    </li>
</ul>
</div></div>
        </div>
    </div>
    <div class="shipping-table-wrap" data-role="shipping-table"><table>
<thead>
    <tr>
        <th>Shipping Company</th>
        <th data-spm-anchor-id="2114.10010108.1000020.i0.4d7450cfUimjRu">Shipping Cost</th>
        <th class="ruballoon">Estimated Delivery Time<span class="ui-help ui-help-icon" data-role="shipping-balloon"></span></th>
         <th>Tracking Information</th> 
    </tr>
</thead>
<tbody>
    <tr data-company-code="EMS_ZX_ZX_US">
        <td class="col-company">ePacket</td>
        <td class="col-price">
            <div class="s-price-detail">
                <del class="s-del-price">US $5.01</del>
                <span class="s-price">US $1.11</span>
            </div>
            <div class="s-save-des">You save: <span class="s-save-price">US $3.90 (about 78%)</span></div>
        </td>
        <td class="col-time">
            <span class="s-time">15 days</span>
        </td>
                <td class="col-track">Available</td>
     
    </tr> 
    <tr data-company-code="CAINIAO_STANDARD">
        <td class="col-company">AliExpress Standard Shipping</td>
        <td class="col-price">
            <div class="s-price-detail">
                <del class="s-del-price">US $6.45</del>
                <span class="s-price">US $3.87</span>
            </div>
            <div class="s-save-des">You save: <span class="s-save-price">US $2.58 (40%)</span></div>
        </td>
        <td class="col-time">
            <span class="s-time">25 days</span>
        </td>
                <td class="col-track">Available</td>
     
    </tr> 
    <tr data-company-code="EMS">
        <td class="col-company">EMS</td>
        <td class="col-price">
            <div class="s-price-detail">
                <del class="s-del-price">US $40.17</del>
                <span class="s-price">US $20.08</span>
            </div>
            <div class="s-save-des">You save: <span class="s-save-price">US $20.09 (about 50%)</span></div>
        </td>
        <td class="col-time">
            <span class="s-time">12-21 days</span>
        </td>
                <td class="col-track">Available</td>
     
    </tr> 
    <tr data-company-code="DHL">
        <td class="col-company">DHL</td>
        <td class="col-price">
            <div class="s-price-detail">
                <del class="s-del-price">US $57.54</del>
                <span class="s-price">US $28.77</span>
            </div>
            <div class="s-save-des">You save: <span class="s-save-price">US $28.77 (50%)</span></div>
        </td>
        <td class="col-time">
            <span class="s-time">6-13 days</span>
        </td>
                <td class="col-track">Available</td>
     
    </tr> 
</tbody>
</table>
<div class="shipping-notice">


</div></div>
</div>`
}