import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);

const mock = [
  {
    id: 1,
    date: '03/09/2020',
    platform: 'Facebook',
    reference: 'ID208083',
    location: 'Singapore',
    status: 'Negative'
  },
  {
    id: 2,
    date: '10/16/2019',
    platform: 'Facebook',
    reference: 'ID591611',
    location: 'Malaysia',
    status: 'Positive'
  },
  {
    id: 3,
    date: '06/05/2019',
    platform: 'Instagram',
    reference: 'ID521865',
    location: 'Malaysia',
    status: 'Negative'
  },
  {
    id: 4,
    date: '12/30/2019',
    platform: 'Facebook',
    reference: 'ID718236',
    location: 'Singapore',
    status: 'Positive'
  },
  {
    id: 5,
    date: '04/08/2020',
    platform: 'Twitter',
    reference: 'ID126890',
    location: 'Malaysia',
    status: 'Negative'
  },
  {
    id: 6,
    date: '12/09/2019',
    platform: 'Instagram',
    reference: 'ID824201',
    location: 'Malaysia',
    status: 'Positive'
  },
  {
    id: 7,
    date: '01/17/2020',
    platform: 'Facebook',
    reference: 'ID046668',
    location: 'Singapore',
    status: 'Negative'
  },
  {
    id: 8,
    date: '06/21/2019',
    platform: 'Instagram',
    reference: 'ID401936',
    location: 'Singapore',
    status: 'Positive'
  },
  {
    id: 9,
    date: '10/06/2019',
    platform: 'Instagram',
    reference: 'ID580019',
    location: 'Malaysia',
    status: 'Positive'
  },
  {
    id: 10,
    date: '04/26/2020',
    platform: 'Instagram',
    reference: 'ID914765',
    location: 'Malaysia',
    status: 'Positive'
  }
]

@Component({
  selector: 'app-crisis-detection',
  templateUrl: './crisis-detection.component.html',
  styleUrls: ['./crisis-detection.component.scss']
})
export class CrisisDetectionComponent implements OnInit {

  private chart: am4charts.XYChart;

  datas = mock

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.initChart()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart = chart
  }

}
