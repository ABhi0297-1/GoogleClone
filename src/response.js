export default {
	kind: "customsearch#search",
	url: {
		type: "application/json",
		template:
			"https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
	},
	queries: {
		request: [
			{
				title: "Google Custom Search - hello",
				totalResults: "1860000000",
				searchTerms: "hello",
				count: 10,
				startIndex: 1,
				inputEncoding: "utf8",
				outputEncoding: "utf8",
				safe: "off",
				cx: "44ff334a53bbcb26a",
			},
		],
		nextPage: [
			{
				title: "Google Custom Search - hello",
				totalResults: "1860000000",
				searchTerms: "hello",
				count: 10,
				startIndex: 11,
				inputEncoding: "utf8",
				outputEncoding: "utf8",
				safe: "off",
				cx: "44ff334a53bbcb26a",
			},
		],
	},
	context: {
		title: "Google",
	},
	searchInformation: {
		searchTime: 0.605803,
		formattedSearchTime: "0.61",
		totalResults: "1860000000",
		formattedTotalResults: "1,860,000,000",
	},
	items: [
		{
			kind: "customsearch#result",
			title: "Adele - Hello - YouTube",
			htmlTitle: "Adele - \u003cb\u003eHello\u003c/b\u003e - YouTube",
			link: "https://www.youtube.com/watch?v=YQHsXMglC9A",
			displayLink: "www.youtube.com",
			snippet:
				"Oct 22, 2015 ... Enjoy the videos and music you love, upload original content, and share it all with \nfriends, family, and the world on YouTube.",
			htmlSnippet:
				"Oct 22, 2015 \u003cb\u003e...\u003c/b\u003e Enjoy the videos and music you love, upload original content, and share it all with \u003cbr\u003e\nfriends, family, and the world on YouTube.",
			cacheId: "hisqDBlSEToJ",
			formattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
			htmlFormattedUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnhVqL9iahkzy1HqmNjFBM1cfw6qooHpPVnnBDdwU3O3k4NLdsc8U32bs",
						width: "259",
						height: "194",
					},
				],
				metatags: [
					{
						"apple-itunes-app":
							"app-id=544007664, app-argument=http://youtube.com/watch?v=YQHsXMglC9A&referring_app=com.apple.mobilesafari-smartbanner, affiliate-data=ct=smart_app_banner_polymer&pt=9008",
						"theme-color": "rgb(34, 34, 34)",
						viewport:
							"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
						"twitter:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
						"og:url": "https://www.youtube.com/watch?v=YQHsXMglC9A",
					},
				],
				cse_image: [
					{
						src: "https://i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title:
				"hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan ...",
			htmlTitle:
				"\u003cb\u003ehello\u003c/b\u003e | Healthy Toothpaste &amp; Mouthwash - Naturally Friendly, Vegan ...",
			link: "https://www.hello-products.com/",
			displayLink: "www.hello-products.com",
			snippet:
				"Shop our naturally friendly products for your family here. Our vegan friendly \ntoothpaste is free from dyes, artificial sweeteners and other preservatives.",
			htmlSnippet:
				"Shop our naturally friendly products for your family here. Our vegan friendly \u003cbr\u003e\ntoothpaste is free from dyes, artificial sweeteners and other preservatives.",
			cacheId: "lcA_2yf_mQgJ",
			formattedUrl: "https://www.hello-products.com/",
			htmlFormattedUrl:
				"https://www.\u003cb\u003ehello\u003c/b\u003e-products.com/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTM7DgD8QLR9aRss-yPhSX2a5KJjezmMTu2dBe1f41KWcyqF5MLvrKtLJM",
						width: "259",
						height: "195",
					},
				],
				metatags: [
					{
						"msapplication-tilecolor": "#ffffff",
						"theme-color": "#ffffff",
						"og:type": "website",
						"twitter:card": "summary",
						"og:site_name": "Hello Products",
						"msvalidate.01": "782AB2D27CB855D9F86E2B56FBC572DA",
						"og:title":
							"hello | Healthy Toothpaste & Mouthwash - Naturally Friendly, Vegan & Never Tested on Animals",
						"twitter:label1": "Written by",
						"msapplication-tileimage": "/ms-icon-144x144.png",
						"og:description":
							"Shop our naturally friendly products for your family here. Our vegan friendly toothpaste is free from dyes, artificial sweeteners and other preservatives.",
						"twitter:data1": "path_admin",
						"article:modified_time": "2020-11-06T20:45:51+00:00",
						viewport: "width=device-width, initial-scale=1.0",
						"og:locale": "en_US",
						"og:url": "https://www.hello-products.com/",
						"format-detection": "telephone=no",
					},
				],
				cse_image: [
					{
						src:
							"https://www.hello-products.com/wp-content/uploads/2020/01/headermobile_03.jpg",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "Hello - YouTube",
			htmlTitle: "\u003cb\u003eHello\u003c/b\u003e - YouTube",
			link: "https://www.youtube.com/watch?v=_WS9w10ygpU",
			displayLink: "www.youtube.com",
			snippet:
				"Jun 23, 2016 ... Watch what you love with YouTube TV. 85+ top channels of live TV, unlimited \nDVR and on-demand hits. No thanks. Try it free. Tap to unmute.",
			htmlSnippet:
				"Jun 23, 2016 \u003cb\u003e...\u003c/b\u003e Watch what you love with YouTube TV. 85+ top channels of live TV, unlimited \u003cbr\u003e\nDVR and on-demand hits. No thanks. Try it free. Tap to unmute.",
			cacheId: "gjctvKs12sMJ",
			formattedUrl: "https://www.youtube.com/watch?v=_WS9w10ygpU",
			htmlFormattedUrl: "https://www.youtube.com/watch?v=_WS9w10ygpU",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBQcNeGsJb-MYH_j-79XzoKMs_WWcT1CYhK-TEiYev4FtXfZD-D_sn5gsc",
						width: "259",
						height: "194",
					},
				],
				metatags: [
					{
						"apple-itunes-app":
							"app-id=544007664, app-argument=http://youtube.com/watch?v=_WS9w10ygpU&referring_app=com.apple.mobilesafari-smartbanner, affiliate-data=ct=smart_app_banner_polymer&pt=9008",
						"theme-color": "rgb(34, 34, 34)",
						viewport:
							"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
						"twitter:url": "https://www.youtube.com/watch?v=_WS9w10ygpU",
						"og:url": "https://www.youtube.com/watch?v=_WS9w10ygpU",
					},
				],
				cse_image: [
					{
						src: "https://i.ytimg.com/vi/N4qYDPAXRlA/hqdefault.jpg",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title:
				"HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
			htmlTitle:
				"\u003cb\u003eHELLO\u003c/b\u003e! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news",
			link: "https://www.hellomagazine.com/",
			displayLink: "www.hellomagazine.com",
			snippet:
				"HELLO! brings you the latest celebrity & royal news from the UK & around the \nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, ...",
			htmlSnippet:
				"\u003cb\u003eHELLO\u003c/b\u003e! brings you the latest celebrity &amp; royal news from the UK &amp; around the \u003cbr\u003e\nworld, magazine exclusives, fashion, beauty, lifestyle news, celeb babies,&nbsp;...",
			cacheId: "hxjkDmKHGvIJ",
			formattedUrl: "https://www.hellomagazine.com/",
			htmlFormattedUrl:
				"https://www.\u003cb\u003ehello\u003c/b\u003emagazine.com/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrFJKj5Z05x3Oik1ptcuuuy59bHOq359QK_F2Pug3AQIxhDa6Sb7xmPeo",
						width: "225",
						height: "225",
					},
				],
				metatags: [
					{
						"p:domain_verify": "2e0d0d07c9164557a351ff28f09074ef",
						"og:image":
							"https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
						"og:type": "website",
						"og:site_name": "HELLO!",
						handheldfriendly: "True",
						"msvalidate.01": "802E2A1202224ED23A9EF77A39836CEC",
						author: "HELLO!",
						"og:title":
							"HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
						locality: "London, UK",
						origen: "hellomagazine.com",
						title:
							"HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news",
						distribution: "global",
						"og:description":
							"HELLO! brings you the latest celebrity & royal news from the UK & around the world, magazine exclusives, fashion, beauty, lifestyle news, celeb babies, weddings, pregnancies and more!",
						"fb:pages": "89982930077",
						viewport: "width=device-width, initial-scale=1",
						"dc.creator": "HELLO!",
						organization: "HELLO!",
						mobileoptimized: "0",
						"fb:admins": "89982930077",
						"resource-type": "document",
						"dc.language": "English",
						lang: "en-GB",
						"og:url": "https://www.hellomagazine.com/",
						"botify-site-verification": "rAorMmkbfzd6yOwJ3PITFmdyCjOzGLug",
					},
				],
				cse_image: [
					{
						src:
							"https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
					},
				],
				sitenavigationelement: [
					{
						name: "Celebrities",
						url: "Celebrities",
					},
					{
						name: "Celebrities",
						url: "Celebrities",
					},
					{
						name: "Select Edition",
						url: "HELLO! NEWSLETTER",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "The Official Home of Hello Kitty & Friends",
			htmlTitle:
				"The Official Home of \u003cb\u003eHello\u003c/b\u003e Kitty &amp; Friends",
			link: "https://www.sanrio.com/",
			displayLink: "www.sanrio.com",
			snippet:
				"Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, \nAggretsuko, Gudetama, and more!",
			htmlSnippet:
				"Explore the supercute world of Sanrio, home to \u003cb\u003eHello\u003c/b\u003e Kitty, My Melody, Kuromi, \u003cbr\u003e\nAggretsuko, Gudetama, and more!",
			formattedUrl: "https://www.sanrio.com/",
			htmlFormattedUrl: "https://www.sanrio.com/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReTGtpEXbQ6ZVLJB2nVYuy5CxdrNZBSLGvYqiNmmvzrtyPkKm0qDAyrwA",
						width: "225",
						height: "225",
					},
				],
				metatags: [
					{
						"og:image":
							"https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
						"theme-color": "#ffffff",
						"og:type": "website",
						"og:image:width": "1200",
						"twitter:card": "summary",
						"og:site_name": "Sanrio",
						author: "Sanrio",
						"og:title": "The Official Home of Hello Kitty & Friends",
						"shopify-checkout-api-token": "16940c0cea93e91348c277a0eafbe76d",
						"og:image:height": "1200",
						"og:description":
							"Explore the supercute world of Sanrio, home to Hello Kitty, My Melody, Kuromi, Aggretsuko, Gudetama, and more!",
						"og:image:secure_url":
							"https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
						"twitter:site": "@sanrio/",
						viewport: "width=device-width,initial-scale=1",
						"shopify-digital-wallet": "/41680830620/digital_wallets/dialog",
						"og:url": "https://www.sanrio.com/",
					},
				],
				cse_image: [
					{
						src:
							"https://cdn.shopify.com/s/files/1/0416/8083/0620/files/HK_AND_Friends_cream_600x600.png?v=1604721645",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "Hello Design",
			htmlTitle: "\u003cb\u003eHello\u003c/b\u003e Design",
			link: "https://www.hellodesign.com/",
			displayLink: "www.hellodesign.com",
			snippet:
				"Hello is a creative agency driven to craft worthy experiences. We believe \neverything will be digital—surrounding us like the air we breathe. Hello is ...",
			htmlSnippet:
				"\u003cb\u003eHello\u003c/b\u003e is a creative agency driven to craft worthy experiences. We believe \u003cbr\u003e\neverything will be digital—surrounding us like the air we breathe. \u003cb\u003eHello\u003c/b\u003e is&nbsp;...",
			cacheId: "bpnW6X-_EvAJ",
			formattedUrl: "https://www.hellodesign.com/",
			htmlFormattedUrl:
				"https://www.\u003cb\u003ehello\u003c/b\u003edesign.com/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR--0_qKuJoRNnvSwoiYALScg3GTJgsjRFwAbRZLQ0tpurCbrxgSMwjOngj",
						width: "310",
						height: "163",
					},
				],
				metatags: [
					{
						cluster: "ip-10-3-1-184.us-west-2.compute.internal",
						"og:image": "https://www.hellodesign.com/image/732/b17/0.5,0.5",
						"og:type": "website",
						"twitter:title": "Hello Design",
						"og:image:width": "1200",
						"twitter:card": "summary_large_image",
						"og:site_name": "Hello",
						author: "Hello Design",
						"og:title": "Hello Design",
						"og:image:height": "630",
						"og:image:type": "jpeg",
						"og:description":
							"Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
						"twitter:image:src":
							"https://www.hellodesign.com/image/732/b17/0.5,0.5",
						viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
						"twitter:description":
							"Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Hello is communication, and simply what we do.",
						"og:url": "https://www.hellodesign.com/index.html",
					},
				],
				cse_image: [
					{
						src: "https://www.hellodesign.com/image/732/b17/0.5,0.5",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "Hello (Adele song) - Wikipedia",
			htmlTitle: "\u003cb\u003eHello\u003c/b\u003e (Adele song) - Wikipedia",
			link: "https://en.wikipedia.org/wiki/Hello_(Adele_song)",
			displayLink: "en.wikipedia.org",
			snippet:
				'"Hello" is a song by English singer-songwriter Adele, released on 23 October \n2015 by XL Recordings as the lead single from her third studio album, 25 (2015).',
			htmlSnippet:
				"&quot;\u003cb\u003eHello\u003c/b\u003e&quot; is a song by English singer-songwriter Adele, released on 23 October \u003cbr\u003e\n2015 by XL Recordings as the lead single from her third studio album, 25 (2015).",
			cacheId: "z7n3yz7lb8gJ",
			formattedUrl: "https://en.wikipedia.org/wiki/Hello_(Adele_song)",
			htmlFormattedUrl:
				"https://en.wikipedia.org/wiki/\u003cb\u003eHello\u003c/b\u003e_(Adele_song)",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTPwGd0i5S8YOngLxcsTn99Z9YW0VOk9ICPGGFfTGRDMViG3FuJ1Lwwk",
						width: "225",
						height: "225",
					},
				],
				metatags: [
					{
						referrer: "origin",
						"og:image":
							"https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png",
						"theme-color": "#eaecf0",
						viewport:
							"width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
					},
				],
				cse_image: [
					{
						src:
							"https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery",
			htmlTitle:
				"HelloFresh: #1 Meal Kit Delivery Service | Fresh Meal Delivery",
			link: "https://www.hellofresh.com/",
			displayLink: "www.hellofresh.com",
			snippet:
				"America's Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the \nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
			htmlSnippet:
				"America&#39;s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the \u003cbr\u003e\nmost recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
			cacheId: "Q2DT63kc83YJ",
			formattedUrl: "https://www.hellofresh.com/",
			htmlFormattedUrl:
				"https://www.\u003cb\u003ehello\u003c/b\u003efresh.com/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNWa3seKdWzcL2xrcSULLZ7zrkKB9KegM9CwZAu8QV-t2khvFWr4wI-s",
						width: "200",
						height: "200",
					},
				],
				question: [
					{
						name: "How does HelloFresh’s meal kit delivery service work?",
					},
					{
						name: "Why choose HelloFresh for your meal kit service?",
					},
					{
						name: "Which food meal plans & recipes does HelloFresh offer?",
					},
					{
						name: "How much does HelloFresh cost?",
					},
					{
						name: "How many times a week does HelloFresh deliver?",
					},
					{
						name: "Does HelloFresh support a healthy lifestyle?",
					},
					{
						name: "Does HelloFresh give nutrition & calorie information?",
					},
					{
						name: "Can I skip a week of delivery?",
					},
					{
						name: "How does HelloFresh’s meal kit delivery service work?",
					},
					{
						name: "Why choose HelloFresh for your meal kit service?",
					},
					{
						name: "Which food meal plans & recipes does HelloFresh offer?",
					},
					{
						name: "How much does HelloFresh cost?",
					},
					{
						name: "How many times a week does HelloFresh deliver?",
					},
					{
						name: "Does HelloFresh support a healthy lifestyle?",
					},
					{
						name: "Does HelloFresh give nutrition & calorie information?",
					},
					{
						name: "Can I skip a week of delivery?",
					},
					{
						name: "How does HelloFresh’s meal kit delivery service work?",
					},
					{
						name: "Why choose HelloFresh for your meal kit service?",
					},
					{
						name: "Which food meal plans & recipes does HelloFresh offer?",
					},
					{
						name: "How much does HelloFresh cost?",
					},
					{
						name: "How many times a week does HelloFresh deliver?",
					},
					{
						name: "Does HelloFresh support a healthy lifestyle?",
					},
					{
						name: "Does HelloFresh give nutrition & calorie information?",
					},
					{
						name: "Can I skip a week of delivery?",
					},
				],
				answer: [
					{
						text:
							"Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
					},
					{
						text:
							"HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
					},
					{
						text:
							"HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
					},
					{
						text:
							"The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
					},
					{
						text:
							"Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
					},
					{
						text:
							"Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
					},
					{
						text:
							"Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
					},
					{
						text:
							"Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
					},
					{
						text:
							"Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
					},
					{
						text:
							"HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
					},
					{
						text:
							"HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
					},
					{
						text:
							"The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
					},
					{
						text:
							"Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
					},
					{
						text:
							"Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
					},
					{
						text:
							"Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
					},
					{
						text:
							"Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
					},
					{
						text:
							"Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you...",
					},
					{
						text:
							"HelloFresh is America’s #1 meal kit, offering the widest variety of recipes to over a million customers around the country. We have the most five-star recipes and the most five-star reviews...",
					},
					{
						text:
							"HelloFresh has the most variety in terms of recipes - from meat & veggies, to low-carb and low-calorie options, and more. You can choose from four delicious meal plan preferences — each one...",
					},
					{
						text:
							"The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot,...",
					},
					{
						text:
							"Three times a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.",
					},
					{
						text:
							"Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.",
					},
					{
						text:
							"Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrat...",
					},
					{
						text:
							"Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week,...",
					},
				],
				metatags: [
					{
						"p:domain_verify": "5aea915e1ac0b408298cfb02478eb3b2",
						country: "us",
						"og:image":
							"https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png",
						"theme-color": "#FFF",
						"apple-mobile-web-app-title": "Home",
						"og:title":
							"#1 Meal Kit Delivery Service | Fresh Meal Delivery | HelloFresh",
						"og:description":
							"America’s Most Popular Meal Kit ✅ Most 5-Star-Reviews ✅ Now offering the most recipe variety ✅ Fresh and affordable Meal Delivery. Get Started now!",
						version: "6.1275.0",
						"twitter:site": "@hellofresh",
						"site:name": "HelloFresh",
						viewport: "width=device-width, initial-scale=1.0",
						"og:locale": "en-US",
						"og:url": "https://www.hellofresh.com/",
					},
				],
				cse_image: [
					{
						src: "https://cdn.hellofresh.com/de/cms/raf/hellofresh-logo.png",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "Nest Hello Video Doorbell - Know Who's Knocking - Google Store",
			htmlTitle:
				"Nest \u003cb\u003eHello\u003c/b\u003e Video Doorbell - Know Who&#39;s Knocking - Google Store",
			link: "https://store.google.com/us/product/nest_hello_doorbell",
			displayLink: "store.google.com",
			snippet:
				"Nest Hello lets you know who's there, so you never miss a thing. It replaces your \nexisting wired doorbell and delivers HD video and bright, crisp images, even at ...",
			htmlSnippet:
				"Nest \u003cb\u003eHello\u003c/b\u003e lets you know who&#39;s there, so you never miss a thing. It replaces your \u003cbr\u003e\nexisting wired doorbell and delivers HD video and bright, crisp images, even at&nbsp;...",
			formattedUrl: "https://store.google.com/us/product/nest_hello_doorbell",
			htmlFormattedUrl:
				"https://store.google.com/us/product/nest_\u003cb\u003ehello\u003c/b\u003e_doorbell",
			pagemap: {
				offer: [
					{
						pricecurrency: "USD",
						price: "179",
						availability: "http://schema.org/InStock",
						sku: "_nest_hello_doorbell",
					},
				],
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1NnFJEylpnzkTZDRTfusbcHfq6UjXiZGuxzmF9cCR1LZc7fuJpiwVxt8",
						width: "225",
						height: "225",
					},
				],
				product: [
					{
						name: "Nest Hello",
						description:
							"Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.",
						brand: "Google",
					},
				],
				metatags: [
					{
						"og:image":
							"https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
						"og:type": "website",
						"twitter:card": "summary",
						"twitter:title": "Nest Hello",
						"og:site_name": "Google Store",
						"msvalidate.01": "5B96ACB2BFE6A95B22143473B8763663",
						"og:title": "Nest Hello",
						"msapplication-tileimage":
							"https://www.gstatic.com/images/branding/product/1x/googleg_96dp.png",
						"og:description": "Video Doorbell",
						"twitter:image":
							"https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
						"twitter:image:alt": "Nest Hello Video Doorbell",
						"twitter:site": "“@madebygoogle”",
						viewport:
							"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
						"twitter:description": "Video Doorbell",
						"og:url": "https://store.google.com/us/product/nest_hello_doorbell",
					},
				],
				cse_image: [
					{
						src:
							"https://lh3.googleusercontent.com/Kd4RAtnCkHY38dAoSlGkLO2id7V8yi6tNk1YrzTzb8NCn8j11IoPxcyVSFQQNacCX1oy=rw",
					},
				],
				hproduct: [
					{
						fn: "Nest Hello",
						description:
							"Answer your door from anywhere. Person alerts, built-in outdoor home security camera with 8x digital zoom, and prerecorded responses so you never miss a visitor or package.",
						currency: "USD",
						currency_iso4217: "840",
					},
				],
			},
		},
		{
			kind: "customsearch#result",
			title: "Hello – The Best Elementor & WordPress Theme | Elementor.com",
			htmlTitle:
				"\u003cb\u003eHello\u003c/b\u003e – The Best Elementor &amp; WordPress Theme | Elementor.com",
			link: "https://elementor.com/hello-theme/",
			displayLink: "elementor.com",
			snippet:
				"Perfect for Elementor. Hello theme works out of the box and offers consistent \ncompatibility with Elementor. When we release a new version of Elementor ...",
			htmlSnippet:
				"Perfect for Elementor. \u003cb\u003eHello\u003c/b\u003e theme works out of the box and offers consistent \u003cbr\u003e\ncompatibility with Elementor. When we release a new version of Elementor&nbsp;...",
			cacheId: "kfKsMZ4-7PcJ",
			formattedUrl: "https://elementor.com/hello-theme/",
			htmlFormattedUrl:
				"https://elementor.com/\u003cb\u003ehello\u003c/b\u003e-theme/",
			pagemap: {
				cse_thumbnail: [
					{
						src:
							"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYzocAKR-jAONkcohvDtZ3fyzCBB9RlVT7nq63XMNpdS8E4M8osOpfnt3s",
						width: "259",
						height: "194",
					},
				],
				metatags: [
					{
						"og:image":
							"https://elementor.com/wp-content/uploads/2019/06/screenshot.png",
						"og:type": "article",
						"og:image:width": "1200",
						"twitter:card": "summary_large_image",
						"og:site_name": "Elementor",
						"og:title":
							"Hello – The Best Elementor & WordPress Theme | Elementor.com",
						"og:image:height": "900",
						bingbot:
							"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
						"msapplication-tileimage":
							"https://elementor.com/wp-content/uploads/2020/06/cropped-elementor_logo_gradient_circle-270x270.png",
						"og:description":
							"Learn about Hello WordPress theme: the best Elementor theme. Fast, elegant and customizable. Get Hello- the fastest WordPress theme ever created.",
						"fb:app_id": "340177129773995",
						"article:modified_time": "2020-09-02T05:33:49+00:00",
						viewport: "width=device-width, initial-scale=1",
						"og:locale": "en_US",
						"og:url": "https://elementor.com/hello-theme/",
					},
				],
				cse_image: [
					{
						src:
							"https://elementor.com/wp-content/uploads/2019/06/screenshot.png",
					},
				],
			},
		},
	],
};
