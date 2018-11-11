<template>
    <div id="place_address_wrap">
        <div class="place_address_box">
            <div class="place_address_details">
                <h3>体验店地址：</h3>
                <p v-for="(list,index) in addressData.addressDetils" :key="index">{{list}}</p>
            </div>
            <div class="place_address_phone">
                <div class="place_address_phone1">
                    <p>{{addressData.hotLineTitle}}</p>
                    <h3>{{addressData.hotLineNum}}</h3>
                </div>
                <div class="place_address_phone1">
                    <p>{{addressData.phoneTitle}}</p>
                    <h3>{{addressData.phoneNum}}</h3>
                </div>
            </div>
            <div class="place_address_contact">
                <p>为了保证您参观的尊贵体验，来时请提前预约</p>
                <div class="place_address_contact_num">
                    <h3>{{addressData.contentNum}}</h3>
                    <p>{{addressData.contentPeople}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "expericeAddress",
        props: {
            addressData: Object
        }
    }
</script>

<style scoped>
    /*Place Address start*/
		div#place_address_wrap {
		    width:  100%;
		    background:  #f9f9fa;
		}

		.place_address_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 140px 0 210px;
		}

		.place_address_details {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    text-align:  center;
		}

		.place_address_box p {
		    overflow:  hidden;
		    width:  100%;
		    height:  24px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  24px;
		    text-align:  center;
		}

		.place_address_details h3 {
		    overflow:  hidden;
		    width: 100%;
		    height: 40px;
		    color:  #25232d;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 40px;
		    text-align:  center;
		}

		.place_address_phone {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 60px 0 67px;
		    text-align:  center;
		}

		.place_address_phone1 {
		    display:  inline-block;
		    width:  300px;
		    height:  auto;
		}

		.place_address_phone1 h3 {
		    overflow: hidden;
		    width: 100%;
		    height: 40px;
		    color: #25232d;
		    font-size: 24px;
		    font-weight: bold;
		    line-height: 40px;
		    text-align: center;
		}

		.place_address_contact {
		    overflow:  hidden;
		    width:  100%;
		}

		.place_address_contact_num {
		    overflow:  hidden;
		    text-align:  center;
		}

		.place_address_contact_num h3 {
		    display: inline-block;
		    overflow: hidden;
		    height: 40px;
		    color: #25232d;
		    font-size: 24px;
		    font-weight: bold;
		    line-height: 40px;
		    text-align: center;
		}

		.place_address_contact_num p {
		    display:  inline-block;
		    width:  auto;
		    height:  40px;
		    line-height: 40px;
		}	
	/*Place Address end*/
</style>
