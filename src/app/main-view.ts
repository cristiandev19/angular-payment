import { Component } from '@angular/core';

@Component({
  selector: 'main-view',
  templateUrl: 'main-view.html',
  styleUrls: ['main-view.css'],
})
export class MainView {
  image: string =
    'https://imgr.search.brave.com/dLFvV5ztz5kbp_c4vrbWpKVxUs15lVWRhLjI412jtSc/fit/1200/1200/ce/1/aHR0cHM6Ly9nZXQu/cHhoZXJlLmNvbS9w/aG90by9tYW4tcGVy/c29uLW1hbGUtcG9y/dHJhaXQtcHJvZmVz/c2lvbmFsLXByb2Zl/c3Npb24tc3BlYWtl/ci1zZW5pb3ItY2l0/aXplbi1lbGRlci1m/YWNlLWV4cHJlc3Np/b24tYWR1bHQtYnVz/aW5lc3MtZXhlY3V0/aXZlLWJlbi1rbmFw/ZW4tMTA2ODY1Mi5q/cGc';
  name: string = 'Cristian Sotomayor';
  panelOpenState: boolean = false;
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
