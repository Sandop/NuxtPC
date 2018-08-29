<template>
	<div id="line_service_wrap">
		<div class="line_service_box">
			<div class="line_service_title_box">
				<div class="line_service_titleC">
					<h2>斥百万重磅升级</h2>
					<h2>特推顶配线下服务</h2>
				</div>
				<div class="line_service_titleE">
					<p>Rebuke millions of pounds  Special push line service</p>
				</div>
			</div>
			<div class="line_service_mid_box">
				<div class="line_service_mid_img">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="124.5px" height="85.5px">
						<path fill-rule="evenodd"  stroke="rgb(34, 32, 43)" stroke-width="3px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M54.610,82.496 C53.523,82.496 52.435,82.227 51.619,81.686 C50.259,80.876 48.628,79.256 48.356,75.478 L48.356,74.936 L52.707,59.552 L33.401,69.001 C32.586,69.540 29.594,71.428 26.331,70.891 C24.972,70.619 22.796,69.808 21.437,67.110 L3.491,46.058 C2.947,45.517 0.500,41.739 2.132,38.231 C3.219,35.802 5.666,34.451 9.745,33.912 L10.288,33.912 L31.226,41.471 L31.498,41.739 C31.770,42.009 33.945,43.091 36.936,39.851 L37.208,39.580 L78.810,9.619 C80.713,7.730 92.134,-3.338 112.255,3.952 C113.887,4.492 120.140,6.112 120.956,10.699 C121.500,13.397 119.869,16.097 116.334,18.798 L92.950,35.532 L69.022,73.588 C69.022,73.588 65.758,79.528 58.960,81.145 C58.145,81.686 56.514,82.496 54.610,82.496 L54.610,82.496 Z"/>
					</svg>
				</div>
				<div class="line_service_mid_desc">
					<p class="line_service_mid_descC">全国不限地区，前往包头店体验客户</p>
					<p class="line_service_mid_descC">可尊享订单金额满20万报销单人往返机票或高铁票。</p>
					<p class="line_service_mid_descE">National limited area, reimbursed single round-trip air tickets</p>
				</div>
			</div>
			<div class="line_service_process">
				<ul>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68px" height="79px">
								<image  x="0px" y="0px" width="68px" height="79px"  xlink:href="data:img/png;base64,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" />
							</svg>
						</div>
						<div class="line_service_process_list">后期维护</div>
					</li>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="80px">
								<image  x="0px" y="0px" width="72px" height="80px"  xlink:href="data:img/png;base64,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" />
							</svg>
						</div>
						<div class="line_service_process_list">物流运货</div>
					</li>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73px" height="79px">
								<image  x="0px" y="0px" width="73px" height="79px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABPCAQAAAANIyBKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBgUOCQTz90fhAAAIOklEQVRo3u3aaZBU1RXA8V9vTM+Mg8AoiyCboGIKjQsuGEy5p9AUKiSohVqilsY1iZXELaKpaJIyGkqMRqJRNHEFy7iVmsrirpjE3QGUCaiAMDJss/dy88FO08PaTQ+MH3Lup37vnPv+795zzz3n9qNrpa/pVnnbeJEu7nkbJel2QRAsdXh3w0DUBZpySMHf9etuIMb6SLDIHI2C4BY9uheov2cEKVeo9DtB0O607gRKukkQzNEXQ70kCOrt131IUzQJPrRv7vdYiwTB03buHqCvWyBY3WmiztcuCKZ1B1CtJwUZN6souFrhDkHQ4KQdj/QzQfDMRot+Vy8IgnftuWOBJlgj+NiBm7g3xmJBcL/qHQc0Sp1grambuT9Fh6DNj3YUULVHBWkzOnlRoSTdIggWO2bHIF0tJfir2i3oDPC0IHjRHtsfaLw1gsXGbEVvX3WCjJmS2xdomH8K1jm3iDTkVC053e0olR6QkXF7UXlRpWkygo98c3sBRV2uWfCygUVa9DNbEDxr9+2D9C1LBMscWoLN/t4VBL/Y7OosQwZ7XdDm/BLtTrFG0GRKVyfB1e4VBDMlSrSM+5l2wXz7dyVQ1GWaBa9tk0/UmiMIHrNL1yEd7VPBckdto/1+OY+6pquAhnlB0ObSMrzhFI2CRieo0ENFp5aUVFLXlW70fdzrQq1lvNj1rhazwMuyGzw/oof5pXRV5SHBv+1dBg708Xi+tNpEi5XQVUqDDrd5o0ykVh8arVKT5oLWZK1sqRMH1VqEMpHga/oLnXoKWox3uZ26oPculG9rFKLdTdFJkqJ8tZAifNWQ/B+pWInv8CdG1GyUMUW0avpfSNjxSNVucKioiKBDQlSQ9jfTdHQXUtzBDrJCi4RdrNaqSl+N64N2VyJVq1ahUrW4tDVatVizkVZW2mpneU8/V7nThw7wgKxs1yLVGGGUMQbro1ZPFdo1WGGZ17xlnpYC3aCHdvMs0ajRR5aolio8QiwfaSfjTHDMRrXsEHCOhZ72qNdkCqAiqlEpIYkq0cLdrlykEX7gdL3ACkt9oVWbjJgKOxtgsD1c6kR3mWllzqZDjZPsY1cjTTTPaJXau8qX9vAH47DQXK9bpN4KbVKyohJ2MsTejnCc4W403DRLEZEV00utPpJ6q9Wr8yiVJ9MEda53uJ6b1al2vCcFwa16osZcy+2HfmYZjYOs9rwEvmu1UM4oRcTcZ7q3tqjV7DmL9HSEIw2wFmR8gRWaNeALGbpq4mZZnfeQLckS9Y7QLoqIlF5OVq+3USapt7caqfXK5SAFC4vUrFBBLvbEJFS6WbuEpLHaJSUktk+o3JKsT6jbPOj93IaSFhMVZM1dHyR2/IbS5k5xCtZYBCnp7kMKnWL5JmTbkTZV23RJdInby7ASOouIq1NvqsM3sOphlfu92RVIjxghCEVVdEFU0j+c6xiTO1V0QUyVCu/8L+spB2lf6zyRixlbk6y44x2oj3YLXWWVkHPLtAGuNd4sr5aPxHxnFezTW5PZjpWV0OgvVqvQUwStXjHQdJPMXb92tk2iSOR28mKkSoWAIK6HGjd6ymxPuscIc7zjNAeXO0rbXqFEdBjuEjU+8JmTXOkzf9LfqSUfGHYZEhFRbW71PRPNdLIRHrHIRKO7D4mUdjVgjqQLLPaA3UwoLwCXh5SV9eUJ1Ruedap+fu8zZxvZfUhBJofUZJbeplhklt2dqJSjtC5Fysjme3jT+8bhjz5xscHlIpVyFleom82PEmlNYuLme9xgk8pDym5tby6Qjk4bRpDNu3JcXEpU8IAVfmiykfrnqv9MKbMRJ1dVFWOUUl0QdSIyMnmkkD97/JcnnOtuKzVbqs6/vaKpNKS9zdZRlEOmJRwklZ+8IJsftWYpEQFpN6mzjz0N8nVHq3dFURl6HmmOg4wo3kCrP/tP7gWCqIkSkjJ6GeOZ3FgvMEMPVWr1dokTJErJpOLOy/9ZHLFh+rlxRxERq7SqQsIyjznDaYIgptm7+UojJaVZg7g642VKWUBxPzVKWpDVLl1gGlRs5vujiJjDzBORMs2MnHZKh6gRKqzVqDWXD0RK/4YprkWrjDYpw41Rlb/T4BUrN/kVREbI+1OrT0HMIFOMN1Rck3Xe9bDXtGxw3F4k0jViMvo43TgJDZpkxe2stw63eC/nshvKbEMLrlc7w9UGaVBvuYEGGe0sd5lmVenZUxwZA/zGZPWmmysr7nO9nWmivUz28UZ+8GW+FARxEUGVi91ghV+aZa2BMlY5wI9dqK+77JnTLwmpwgUme86Fki4yRsIS95jiGleZ6fGN9vU0RuvtImvEpA1xmYWmetEUUw3R5FXTnWi2SSZIWC5W6vTtZZkFhjnEMp+4w41eFVynn1elpaU2ah2arNOe+xV87lTMELzoBnf4zBfGOtjdHvaQ6b7ht4K59toKSe7kJGIf/d1rpaesdIoFSLjJNB+43PDNvF9ayMfxqEbP+I6L3exKKdzmITMc5ZycRi+1SG9142qW+XJn2lNQZ6zBploAUq5xnAv8xNtFRJQg4iiXessvcnHpA9e515Hm6a3OalFZJA0X3UJ6lzZIjLiIGhEJAzX4OH+7yQITvChSVJDL6CHuPuvyV+pEDHK2I5zpSVERjPArTVvIzFN2sxNxac+r8oZh+js4f3zV3ygfernIlDXIGOdAu1qSu3KYrI9ELPMpkgaixiFF9ZaXgeZa5lgw1OMyTijJfpKUBw0Fx1vq+YKvmvq630qLLdpqW+aNwmkZ504jvWSNMXZ1rV+XUHBS4XI/t9RctQ4333kFdW/MSEO0FJE3xS3/L6fJ9NL1d+gVAAAAAElFTkSuQmCC" />
							</svg>
						</div>
						<div class="line_service_process_list">送货上门</div>
					</li>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73px" height="79px">
								<image  x="0px" y="0px" width="73px" height="79px"  xlink:href="data:img/png;base64,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" />
							</svg>
						</div>
						<div class="line_service_process_list">搬楼入户</div>
					</li>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="80px">
								<image  x="0px" y="0px" width="72px" height="80px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABQCAQAAAAQYfs6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBgUOCSIh+sIcAAALYUlEQVRo3s3aeZBUVZYG8F9lFSVrVQGCoKCAijJoKG7tgrbaOthoEy5tTCvOYKtjuEXrqEPbIqO4TEu3MkQM2oI6ttouLe7rOGhrI4pKS6GiA6gglFAKWBtVFLVk3vmjstLMypdVlaDBfC8y4t17zz3ve/eee+6552WBjSoEQauEIC4hIZ5xH5cQT5Xb5ajxiBVyYZhJirSKC8l+IakjLoEEAoKARPK+t6RYq3jySqRdodNrm+tz0ulhWhe9s6+EJqFIQqsF1uitIHXF0u7T62KIoUCBQw02TqF4JKEyp6LG14rEklcBqZ+MUgGCQqUUqdXDfZ7NUpnZNb1MUGSaG4yxn08jpIKDjNPoFvOUKFSQJBRTqEBh8j6mMEW2ULO93GZEkSp72yPiHUPyF41Wr7jOSJd6Q2ly5GLJkSwSN1FPqzymXr3uolkMlglu63an7zBIeRc2cX+eGqeo1VykGqU5bSE36jxlVy3aVkgiaZaSKzKhwfw8Nfazi2+LbMBAfdTl2b3Zgz7QkLYiE0mH0LasW6zLU+NQxdYWWY/dlORNKKhQkWefztDDaAW+iNmEgfp/j6q3DwMMwTcxDein387mo5++qIqpE/TWZ2fz0V8/rI/5Sq2S/wdTNlx/jVbHfGuTXnbb2XyMUKa2zYY2YXCbl9yJ2ENMja0xTWoxVO+dSqfYAFTYFtNkC3bTd6cS6qUMqzXGNKhEPz3zUjDCSXp8j4T6G4ovbItp9BV650VoLw970XWKc0oU5KENdtMfFVqKsE4wIA/XuLt59vKC32gyW3OERB8T1Flrk62R7dkYpAw1bYUT1Knx027S6ekxm52ht3vUuThSYoag1RpPm+4MYwzocg1PtkW9Y9oKR/hScH636BQ7U6ubwX4avJ4lUehqwUrP+thmQfCVx4zrQu+vxK20H0XYpp5u+OrhfuIg4xUarbe+ZqpzZ5bUuX5nhXMsM8zexrjQYU72sPJOde8hpqI94hhloWB6F3QmWKzaCou8Y6vfeUTcP2ZJnalOhWNT5bGW2uy8Loy82J8ED7cPygBPCWYp6qTLz9VY5SLDlBrmr4Im12RJHW+jaqelygdYKu7yZGmIXXMQG+S/BXe3L6we/iB4tJNJO8omy/xdqvwHG52nsIPUQT5U44JUeaRFghuSBj3Q436vNFL/CIsEt3/nemYI3jQiB50yL9rk8LSa2cqz6DBFMC/lLgd7WXBH8iF93S1YZVTkEw70keByMUn2tdgtpyc6xo/NtiStZpRvIib4Y5VakvV7uMspZrnFNvQw3aVa9TUk8gkDDRBUSLQT2qIt5u+IEqNxtGovp9Xu7UcWaMqSXm6VY5KTUupYcUvUIuYqU71iphJjIz3SQAPVtrnFtuYqDfplbQQD3GO+n9vTmoxwfqrBDlaSpbbZOmOMBKtdodYMx2GKGZa53DPi9oncAYfoqc7W7yp+rELCxAyhXu7X6hNfq/ZCmjFeodUqCY8bmKV4qibnpg7Vv7DNMjNUWetYDPGpZyLN+lbBJ8Z+V3GwjwUXpYkUuVWzqfa1ULAoaYwlfu1b/2V/TwvmG9RB8XhVZqRGOuZijZpVOk0Bir2gwl5ZdIrMEbyZ3rKPdwQ3pgy1wMWq3agYB3hbi2fcbI7lmnxtfwz1qGC+oRmqR6jwF2Wp8i6m2eCClN3MlPDjLEK9PChkjvgwrwnuTdlFgTs1+odkaZwl4uqtNMfDGj2iDLu6X9xzhqcpni3eYVLKHKhX8n4PC4QOhgEDPSeYnR4ADfKs4CmDUzV7etVXJibt4Wif+copivT0J/GkVy8zV4s37ANKzdNqgdGiUeoxLf7TgKyWUd4SXJ++/nq5X/BqRlpmb+/7xvFJSkf5zGuGY4i3JFyrECXmaPaWfZX4o4QX7Zka40w/1ds9Eh5Km87vcLBPBJemVxW4XfBWB4Mbq9yG5EbZywuqHArGWGaLyQrQx+2avO8VLebbPdmz0M9c4QRDlOiBnmYKXjIscuyOVymYklk5VbDcfh1ED7TKaofo4w7Nrk75kPHWqTIBFLtZs+CltLc/RZ1gi0894VpHu0nc28mpzcZENZqclVn5S80qHZElfKQKH5pjq1kZnvxMtb5Mhl09TFfng/Z4z2j/q8ocT/pcdTJ5tcT+cuEszaqcmFl5qk22OTVC/DjrBPOyTv+Xa7Uoteyv1WCNk9DX84KrwF4muNITnk+LkLJxgWC1QzIrT1AhRARcbW3Xpa2/dhSYLuHx1Kq5VIN1fuImwQMdTLrzVMZUwZKO5jLeasEleR2oj9Eo+I/U4y5S7xuNno+gnxtFZgoWtBt8O4GtGrFLHoROdLdtlrvK1cle97lUTz29YWMehHoZiPqO0cM+3hNM6+Tol4mJ1mpxscOUa/bLVP3Z1lnjnDwIDTI/Kl4d6nXBHd1MOZxug63JYHW8CpvTNoTTbFTV0at0gt29JLivY3jYz5OCByI9aUf8QqWatFE4W721aSHuz3ytyj93k9BwCwR3dpybmLmC57phjlNsVuXMjL6X2Ko8bRc7xXp1mZtBToyySDA9+zwyS7Aw8iNDOi5TrSLtoNOGA6wUPG3XVM1JVmtwdTcIjfWR4Mrsht8KlkaET+n4tQafZzm5wZ60xSdazU3zOEdbodG0Lgkdbp3gn7IbbhZ8Yu+cHWOmabTK+A71Pdwk4R67e0aLaWkx85GW2+bfunAlx9msyenZDdcIvkiPazNQ7BZNljo8a64na/KmURjtXU0uTPPS47yn2e2drt3TNKhxSnbD2WrVOiGyU5nZWr3rwIj322hNatSOtEaDSWmkx1qo1ZwcJ1a4UFDp+OyGg3wquCriAFjqLglvGq1AfyVpjxthkaaM+Z/ka186LK1mlAXi7srhUArdKFju4OymEq8LyXg5EyP9TaWDMd6zXnZIklKp+8SzEjJT1CpPns7aMNzTgl9F2lKZhwTPpq3PNEzTqjJiWvh39SbgdZ/51kt6ak9M/TkieztNk1cyUvHjNfhjKthPxyHWCLnW4pFWC66KeJNj1HtcLwu9ZrGleuNUrT6KDOlj7hY8lKI60KOaXRIhWeACweZc6cQ+nhH8LcJbt52cJjrNShtMxn5WqDYpWpEBXhTcrBgl5grujTTrtgPQq7n3h/PVZ4fb4FAbrHGCMQ7XlqAJ/kVujLRYcIkBbhM8l+Nbyk/Va3ZtbjWDLRK8H2li52lQabI+2rz63C7SdOOsttUTWizM4W5LPS9YYt/O1FyoSXBZZNsUXwpec6e4d3NketJxss8FbxqTo/0sLZr9pnMlbYt/ZY497UgPqhFUOqpLOnC0y3KeZIdaLHgvx1ktDX+vSjAvImUHfR3ntxnBx/ZihqAxLSOZEzGzBQ2dhKFFXSvpEierFvy5e59WhysXLM859zuOUZYKPuv+EybZKnj6B/pW3deTgoZufswARW4RNJv5gxD6vRbBrG6fcECpRwXVORzAjuA6WwTzOwlIcmAf7woqnfu90rlajWBhKo+UF46wSrDOGXl/H4xGoWvUCD7IGZd2iZOtE1Q4I4dXyge93KReUJ4RvuWNM6wXVJqcnwlmYZh54oLFDtrRN5vkS0G9f43I3XcPhX5kgSDulawc3XbhJB8Kgnu3S11/F1sraPBAh6z2DmCc/xEE7zs9L2dZ6DAPCYL1ro/4uLMDGGauakGDuxwWGR1nY1/X+lwQ/DXr8P09oNj53hMEn7nTsV2M1BhXekcQrHVrFwf0HcBYs5L/nF3nAecZGzENpca7wWJBsNUTTsrvEfm6vAInOscEw5BQ7lPlKtRqELeLMvs6yiFGotlfPOqF9n8r/FCEoK9DTXC8A5LTVqvBNnHF+iSj8Qrveslr1uevfHs3hWIj7O8I+zvQqLSQbY0lyr1thU3bp/j/AF/sEgy1tiP7AAAAAElFTkSuQmCC" />
							</svg>
						</div>
						<div class="line_service_process_list">专业安装</div>
					</li>
					<li class="line_service_process_list">
						<div class="line_service_process_list_img">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73px" height="79px">
								<image  x="0px" y="0px" width="73px" height="79px"  xlink:href="data:img/png;base64,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" />
							</svg>
						</div>
						<div class="line_service_process_list">十年质保</div>
					</li>
				</ul>
			</div>
			<div class="line_service_bottom">
				<p class="line_service_bottomC">线上线下同服务，2688个区域6包</p>
				<p class="line_service_bottomE">Online and offline service, 2688 regions, siex packs</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'lineService'
	}
</script>

<style scoped>
/*Line Service start*/
	div#line_service_wrap {
	    width:  100%;
	}

	.line_service_box {
	    overflow:  hidden;
	    width:  1200px;
	    height:  auto;
	    margin:  0 auto;
	    padding: 150px 0;
	}

	.line_service_title_box {
	    width:  100%;
	    text-align:  center;
	}

	.line_service_titleC {
	    overflow:  hidden;
	    width:  100%;
	    height:  91px;
	}

	.line_service_titleC h2 {
		font-size:  38px;
		font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
		font-weight: 900;
		color: #22202b;
		line-height: 46px;
	}

	.line_service_titleE {
	    overflow:  hidden;
	    width:  100%;
	    height:  34px;
	    color:  #858585;
	    font-size:  14px;
	    line-height:  34px;
	    text-align:  center;
	}

	.line_service_mid_box {
	    width:  100%;
	    height:  auto;
	    padding:  85px 0 80px;
	    text-align:  center;
	}

	.line_service_mid_img {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	}

	.line_service_mid_desc {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    padding-top: 80px;
	}

	p.line_service_mid_descC {
	    color:  #858585;
	    font-size:  18px;
	    line-height:  24px;
	    text-align:  center;
	}

	p.line_service_mid_descE {
	    color:  #d6d6d6;
	    font-size:  14px;
	    line-height:  34px;
	    text-align:  center;
	}

	.line_service_process {
	    overflow:  hidden;
	    width:  100%;
	}

	.line_service_process ul {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    text-align:  center;
	}

	li.line_service_process_list {
	    display:  inline-block;
	    width:  72px;
	    height:  auto;
	    margin:  0 35px;
	}

	.line_service_process_list_img {
	    width:  100%;
	    height:  auto;
	    text-align:  center;
	}

	.line_service_process_list {
	    overflow:  hidden;
	    width:  100%;
	    height:  30px;
	    color: #858585;
	    font-size:  14px;
	    line-height:  30px;
	    text-align:  center;
	}

	.line_service_bottom {
	    width:  100%;
	    padding-top:  90px;
	}

	p.line_service_bottomC {
		color:  #858585;
		font-size: 18px;
		line-height:  26px;
		text-align:  center;
	}

	p.line_service_bottomE {
	    color:  #d6d6d6;
	    font-size:  14px;
	    line-height:  20px;
	    text-align:  center;
	}
/*Line Service end*/	
</style>