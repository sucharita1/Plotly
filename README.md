# Plotly
Use javascript to manipulate json data and prepare dashboards to present the data using plotly.

## Overview of the Analysis
Roza is a biological researcher in a prominent microbiology laboratory.She is trying to collect sample of bacerial species that have ability to synthesize proteins that taste like beef. Partnered with Improbable beef she has sampled the navels of people across the country to identify the bacterias in their belly buttons.Those who participated in the study have each been given a subject ID. She needs our help to prepare a dashboard that both her research participants and fellow researchers can access.They will enter the website and select a Subject ID, which is the ID of one of the participants to get their demographic data like age, location etc as well as information on the details of the bacteria found on their belly buttons.
Based on the subject ID:
* The bar chart shows the top 10 bacterial species i.e. Operational Taxonomic Unit(OTU ID) found in each subject's belly buttons.
* The gauge chart shows weekly washing frquency of their belly button.
* The bubble chart, shows bacterial cultures per sample i.e. corresponding sample values(bacterial species name for each OTU ID) against the OTU ID.

## Resources
Bootstrap 4, Javascript ES6, VSCode 1.63.2, CSS, HTML, Chrome Browser.

## Results
1. We have build a webpage on belly button data and deployed it on github pages https://sucharita1.github.io/.
![github_page](?raw=true)

The html template can be found as [index.html](), the css stylesheet can be found as [style.css](), charts and dashboard functionality can be found in [charts.js]().

#### A Horizontal Bar Chart:
We have created a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage the code can be found in ![bar_chart](?raw =true)

When a sample is selected from the dropdown menu, arrays with bacteria information is created and passed as the trace object in the buildCharts() function then a layout is chosen and title created. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and the bar chart has the following: 
* The top 10 sample_values are sorted in descending order
* The top 10 sample_values as values
* The otu_ids as the labels

#### A Bubble Chart:
We have created a bubble chart to display bacteria cultures per sample i.e. corresponding sample values(bacterial species name for each OTU ID) against the OTU ID when an individual’s ID is selected from the dropdown menu on the webpage the code can be found in ![bubble_chart](?raw =true)

 When a sample is selected from the dropdown menu, arrays with bacteria information is created and passed as the trace object in the buildCharts() function then a layout is chosen and title created. When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and the bubble chart has the following: 
* The otu_ids as the x-axis values.
* The sample_values as the y-axis values.
* The sample_values as the marker size.
* The otu_ids as the marker colors.
* The otu_labels as the hover-text values.

#### A Gauge Chart:
We have created a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu on the webpage the code can be found in ![gauge_chart](?raw =true)

When the dashboard is first opened in a browser, ID 940’s data is displayed in the dashboard, and the gauge chart has the following: 
* A title for the chart.
* Franges for the gauge in increments of two, with a different color for each increment.
* Adds the washing frequency value on the gauge chart.
* The indicator shows the level for the washing frequency on the gauge.
* The gauge fits in the margin of the <div> element.

#### Customized Dashboard for the website:
1. Added an image to the jumbotron.
![jumbotron_background_image](?raw=true)
2. Added background color to the webpage as well as charts with color #fff8f3.
![chart_background_color](?raw=true)
3. Add more information about the project as a paragraph on the page.
![introductory_paragraph](?raw=true)
4. Add customization to dropdown Subject ID selector with color #1f77b4 and font, font-color and font-size customization.
![selection_dropdown_customized](?raw=true)


