---
layout: default
permalink: /wineries/
headline: Video Production For Wineries
icon_path: /uploads/wine.png
banner_image_path: /images/banners/videos/wineries.jpg
headline: 'How to get more customers into<strong>your tasting room</strong>'
icon_path: /uploads/wine.png
banner_image_path: /images/banners/videos/wineries.jpg
banner_vid_image_path: /images/banners/videos/wineries_vid.jpg
banner_vid_path: /images/banners/videos/wineries4.mp4
acv_number: 250
ad_spend: 1500
cpm_number: 30.0
ctr_number: 1.45
sr_number: 15.0
cr_number: 35.0
features:
  - feature_title: Video Production
    feature_image_path: /images/illustrations/features/video.png
    feature_description_html:
      <p>We produce stunning video ads that catch your customers attention and make them want to come visit you.</p>
    button_url: '/wineries/videos/'
    button_text: See Our Work
  - feature_title: Ad Management
    feature_image_path: /images/illustrations/features/fb_reports.png
    feature_description_html: >-
      <p>We'll manage your advertising and help you get the best return on your investment.</p>
    button_url: /wineries/advertising/
    button_text: How Does Ad Management Work?
  - feature_title: Web Development
    feature_image_path: /images/illustrations/features/fb_form.png
    feature_description_html: >-
      <p>We design and develop beautiful websites designed to attract more customers into your tasting room.</p>
    button_text: See How it Works
    button_url: /wineries/websites/
---
<div class="banner" style="background-image: url('{{ page.banner_image_path }}');">
	<video playsinline autoplay muted loop poster="{{ page.banner_vid_image_path }}" id="bgvid">
	    <!--<source src="polina.webm" type="video/webm">-->
	    <source src="{{ page.banner_vid_path }}" type="video/mp4">
	</video>
	<hgroup>
		<h1>{{ page.headline }}</h1>
		<a href="#quote-form" class="button">Lets Talk</a>
	</hgroup>
	<img src="/images/banners/banner-bottom.svg" alt="" class="banner-bottom" />
</div>

{% include alternating.html %}

