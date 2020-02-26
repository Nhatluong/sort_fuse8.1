import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorServiceService } from 'app/pages/vendors/vendor-service.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { filter } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

    private vendors: {} = [];
    private dataSource: any;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    selection = new SelectionModel<any>(true, []);
    displayedColumns = ['select', 'code', 'company_name', 'main_items', 'phone_number', 'email', 'address', 'action'];
  constructor(private vendorService: VendorServiceService) { }

  ngOnInit() {
      this.getVendors();
  }

  getVendors() {
      this.vendorService.getVendors().subscribe((data) => {
          this.dataSource = new MatTableDataSource<any>(data.data);
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.data)
      });
  }
  delete(element) {
      console.log('vao')
        this.dataSource.data = this.dataSource.data.filter(data => {
            return data.id != element.id;
        })
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

}
