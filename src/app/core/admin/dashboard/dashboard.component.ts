import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public clicked: boolean = true;
  public clicked1: boolean = false;

  private chart: am4charts.XYChart;

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

    // Add data
    chart.data = [
      { date: new Date(2019, 5, 12), value1: 5011, value2: 4822, value3: 4733, previousDate: new Date(2019, 5, 5) },
      { date: new Date(2019, 5, 13), value1: 5311, value2: 5122, value3: 5244, previousDate: new Date(2019, 5, 6) },
      { date: new Date(2019, 5, 14), value1: 5611, value2: 5822, value3: 6451, previousDate: new Date(2019, 5, 7) },
      { date: new Date(2019, 5, 15), value1: 5211, value2: 5322, value3: 5413, previousDate: new Date(2019, 5, 8) },
      { date: new Date(2019, 5, 16), value1: 4811, value2: 4422, value3: 4542, previousDate: new Date(2019, 5, 9) },
      { date: new Date(2019, 5, 17), value1: 4711, value2: 4222, value3: 4351, previousDate: new Date(2019, 5, 10) },
      { date: new Date(2019, 5, 18), value1: 5911, value2: 5522, value3: 5911, previousDate: new Date(2019, 5, 11) }
    ]

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.dateX = "date";
    series.name = 'Instagram'
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltip.pointerOrientation = "vertical";
    series.stroke = am4core.color("#a2ec4e")

    // Create series
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.name = 'Twitter'
    series2.strokeWidth = 2;
    series2.stroke = series.stroke;
    series2.stroke = am4core.color("#ff5733")

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "value3";
    series3.dataFields.dateX = "date";
    series3.name = 'Facebook'
    series3.strokeWidth = 2;
    series3.stroke = series.stroke;
    series3.stroke = am4core.color("#4ea2ec")

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

    chart.legend = new am4charts.Legend();

    this.chart = chart

  }

}
