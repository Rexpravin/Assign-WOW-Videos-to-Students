import { SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatRadioButton } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as moment from 'moment';
import { of } from 'rxjs';
import * as XLSX from 'xlsx';
import { PrePayAndShareComponent } from './pre-pay-and-share/pre-pay-and-share.component';
import { CKEditorComponent } from 'ng2-ckeditor';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assign-wow-videos-with-students',
  templateUrl: './assign-wow-videos-with-students.component.html',
  styleUrls: ['./assign-wow-videos-with-students.component.scss'],
})
export class AssignWowVideosWithStudentsComponent implements OnInit {
  //* --------------------------  Start  -----------------------------------*//

  //* -----------------------  Decorated Methods  --------------------------*//
  @ViewChild('radio') radio: MatRadioButton | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild('paginatorElement', { read: ElementRef })
  paginatorHtmlElement!: ElementRef;
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;
  @ViewChild('myckeditor') ckeditor: CKEditorComponent | undefined;
  @Output() getSelectedOption = new EventEmitter();
  @Output() getSelectedOption2 = new EventEmitter();
  //* -----------------------  Variable Declaration  -----------------------*//
  countries: any[] = [
    { shortName: 'IND', name: 'India' },
    { shortName: 'AUS', name: 'Australia' },
    { shortName: 'ENG', name: 'England' },
    { shortName: 'UAE', name: 'Arab Emirates' },
  ];

  nestedTreeControl!: NestedTreeControl<TreeData>;
  nestedDataSource!: MatTreeNestedDataSource<TreeData>;
  checklistSelection = new SelectionModel<TreeData>(true /* multiple */);

  selected_category_val: any[] = [];

  TREE_DATA: any[] = [
    {
      id: 1,
      user_category_id: '1',
      parent_user_category_id: null,
      user_category_name: 'Universities and Colleges',
      'is_the category_hidden': '0',
      children: [
        {
          id: 2,
          user_category_id: '2',
          parent_user_category_id: '1',
          user_category_name: 'Universities',
          'is_the category_hidden': '0',
          children: [
            {
              id: 5,
              user_category_id: '5',
              parent_user_category_id: '2',
              user_category_name: 'Deemed University',
              'is_the category_hidden': '0',
              children: [],
            },
            {
              id: 6,
              user_category_id: '6',
              parent_user_category_id: '2',
              user_category_name: 'University',
              'is_the category_hidden': '0',
              children: [],
            },
          ],
        },
        {
          id: 3,
          user_category_id: '3',
          parent_user_category_id: null,
          user_category_name: 'Colleges ',
          'is_the category_hidden': '0',
          children: [
            {
              id: 7,
              user_category_id: '7',
              parent_user_category_id: '3',
              user_category_name: 'Arts & Science',
              'is_the category_hidden': '0',
              children: [],
            },
            {
              id: 8,
              user_category_id: '8',
              parent_user_category_id: '3',
              user_category_name: 'Engineering',
              'is_the category_hidden': '0',
              children: [
                {
                  id: 9,
                  user_category_id: '9',
                  parent_user_category_id: '8',
                  user_category_name: 'Medical',
                  'is_the category_hidden': '0',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          user_category_id: '4',
          parent_user_category_id: '1',
          user_category_name: 'Schools ',
          'is_the category_hidden': '0',
          children: [
            {
              id: 10,
              user_category_id: '10',
              parent_user_category_id: '4',
              user_category_name: 'Tamil Nadu State Education Board',
              'is_the category_hidden': '0',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      user_category_id: '1',
      parent_user_category_id: null,
      user_category_name: 'Universities and Colleges',
      'is_the category_hidden': '0',
      children: [
        {
          id: 2,
          user_category_id: '2',
          parent_user_category_id: '1',
          user_category_name: 'Universities',
          'is_the category_hidden': '0',
          children: [
            {
              id: 5,
              user_category_id: '5',
              parent_user_category_id: '2',
              user_category_name: 'Deemed University',
              'is_the category_hidden': '0',
              children: [],
            },
            {
              id: 6,
              user_category_id: '6',
              parent_user_category_id: '2',
              user_category_name: 'University',
              'is_the category_hidden': '0',
              children: [],
            },
          ],
        },
        {
          id: 3,
          user_category_id: '3',
          parent_user_category_id: null,
          user_category_name: 'Colleges ',
          'is_the category_hidden': '0',
          children: [
            {
              id: 7,
              user_category_id: '7',
              parent_user_category_id: '3',
              user_category_name: 'Arts & Science',
              'is_the category_hidden': '0',
              children: [],
            },
            {
              id: 8,
              user_category_id: '8',
              parent_user_category_id: '3',
              user_category_name: 'Engineering',
              'is_the category_hidden': '0',
              children: [
                {
                  id: 9,
                  user_category_id: '9',
                  parent_user_category_id: '8',
                  user_category_name: 'Medical',
                  'is_the category_hidden': '0',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          user_category_id: '4',
          parent_user_category_id: '1',
          user_category_name: 'Schools ',
          'is_the category_hidden': '0',
          children: [
            {
              id: 10,
              user_category_id: '10',
              parent_user_category_id: '4',
              user_category_name: 'Tamil Nadu State Education Board',
              'is_the category_hidden': '0',
              children: [],
            },
          ],
        },
      ],
    },
  ];
  ELEMENT_DATA: PeriodicElement[] = [
    {
      wow_image: 'assets/images/image 219.png',
      faculty_rating: 4,
      unresolved_flags: 'Yes',
      subscription_charges: 10,
    },
    {
      wow_image: 'assets/images/image 219.png',
      faculty_rating: 4,
      unresolved_flags: 'Yes',
      subscription_charges: 10,
    },
  ];
  ELEMENT_DATA2: PeriodicElement2[] = [
    {
      name: 'Rex',
    },
    {
      name: 'Rex',
    },
  ];

  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 20];

  filterValue = '';

  displayedColumns: string[] = [
    // 'select',
    'radio_btn',
    'wowVideo',
    'facultyRating',
    'unresolvedFlags',
    'subscriptionCharge',
  ];
  displayedColumns1: string[] = ['name'];

  sortBy: any[] = [
    { value: 'WOW Videos Globalized Date (New to Old)' },
    { value: 'Avg Global Rating (High to Low)' },
    { value: ' Your Rating (High to Low)' },
    { value: 'Up to Date Daily Subscriptions (High to Low)' },
    { value: 'Subscription Charges (Low to High)' },
    { value: 'Subscription Charges(High to Low)' },
  ];

  dataSource: MatTableDataSource<PeriodicElement> =
    new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  dataSource2: MatTableDataSource<PeriodicElement2> =
    new MatTableDataSource<PeriodicElement2>(this.ELEMENT_DATA2);
  selection = new SelectionModel<PeriodicElement>(true, []);

  rowValue: any[] = [];
  table_json_data: any;
  ckeConfig!: CKEDITOR.config;
  description: string = '';
  selectedOption!: string | any;
  selectedOption2!: string | any;
  selectedOption3!: string | any;

  selectClass: any[] = [
    { user: 'Student', class: 'Class 1', section: 'Section A' },
    { user: 'Student', class: 'Class 2', section: 'Section B' },
    { user: 'Student', class: 'Class 3', section: 'Section C' },
  ];
  selectSubject: any[] = [
    { subject: 'Student-Class 1', term: 'Term 1' },
    { subject: 'Student-Class 2', term: 'Term 2' },
    { subject: 'Student-Class 3', term: 'Term 1' },
  ];
  syllabus: any[] = [
    {
      courseSubjectName: 'Maths',
      courseSubjectType: 'class-I-Term 1',
      educationalInstituteName: 'TamilNadu Samacheer Kalvi',
      country: 'IN',
    },
    {
      courseSubjectName: 'Tamil',
      courseSubjectType: 'class-I-Term 2',
      educationalInstituteName: 'TamilNadu Samacheer Kalvi ',
      country: 'UK',
    },
    {
      courseSubjectName: 'Tamil',
      courseSubjectType: 'class-I-Term 3',
      educationalInstituteName: 'TamilNadu Samacheer Kalvi ',
      country: 'SL',
    },
  ];
  public form: FormGroup;
  //* ---------------------------  Constructor  ----------------------------*//
  constructor(private _dialog: MatDialog, private fb: FormBuilder) {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    // Star Rating
    this.form = this.fb.group({
      // rating1: ['', Validators.required],
      rating1: [3],
    });
  }

  //* -------------------------  Lifecycle Hooks  --------------------------*//
  ngOnInit(): void {
    this.nestedDataSource.data = this.TREE_DATA;
    this.nestedTreeControl.dataNodes = this.TREE_DATA;
    this.nestedTreeControl.expandAll();
    // this.loadData();

    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: false,
      removePlugins: 'exportpdf',

      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        {
          name: 'paragraph',
          groups: [
            'basicstyles',
            'cleanup',
            'list',
            'indent',
            'blocks',
            'align',
            'bidi',
            'paragraph',
            'spellchecker',
            'colors',
            'Select',
          ],
        },
      ],
      removeButtons:
        'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,Outdent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Unlink,Anchor,Flash,orizontalRule,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About',
    };
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.translateMatPaginator(this.paginator);
  }

  ngDoCheck(): void {
    if (this.selection.selected.length <= 0) {
      this.rowValue = [];
    }
  }
  //* ----------------------------  APIs Methods  --------------------------*//

  //* --------------------------  Public methods  --------------------------*//
  private _getChildren = (node: TreeData) => of(node.children);

  hasNestedChild = (_: string, nodeData: TreeData) =>
    nodeData.children.length > 0;

  refreshTreeData() {
      const data = this.nestedDataSource.data;
      this.nestedDataSource.data = [];
      this.nestedDataSource.data = data;
    }

  getLevel = (node: TreeData): any => node.level;

  isExpandable = (node: TreeData) => node.expandable;

  descendantsAllSelected(node: TreeData): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeData): boolean {
    const descendants = this.nestedTreeControl.getDescendants(node);
    const result = descendants.some((child) =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TreeData): void {
    this.checklistSelection.toggle(node);
    const descendants = this.nestedTreeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every((child) => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
    this.selected_category_val = this.checklistSelection.selected;
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: TreeData): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
    this.selected_category_val = this.checklistSelection.selected;
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TreeData): void {
    let parent: TreeData | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TreeData): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.nestedTreeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TreeData): TreeData | null {
    const currentLevel: any = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.nestedTreeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode: any = this.nestedTreeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
  // Tree End

  // Table
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    // console.log(this.selection.selected);
    this.rowValue = this.selection.selected;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  } /** Whether the number of selected elements matches the total number of rows. */

  // loadData() {
  //   this._apiService
  //     .get_periodic_elements(this.currentPage, this.pageSize)
  //     .subscribe((res) => {
  //       this.table_json_data = res;
  //       this.dataSource.data = res.data.rows;

  //       setTimeout(() => {
  //         this.paginator.pageIndex = this.currentPage;
  //         this.paginator.length = res.data.count;
  //       });
  //     });
  // }

  pageChanged(event: PageEvent) {
    // console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    // this.loadData();
  }
  showPageSizeOptions: boolean = true;

  translateMatPaginator(paginator: MatPaginator) {
    paginator._intl.firstPageLabel = 'First';
    paginator._intl.itemsPerPageLabel = 'Records Per Page';
    paginator._intl.lastPageLabel = 'Last';
    paginator._intl.nextPageLabel = 'Next';
    paginator._intl.previousPageLabel = 'Previous';
  }

  exportReport(fileName: any): void {
    /* pass here the table id */
    let element = document.getElementById('excel_table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  onPrint() {
    window.print();
  }

  public downloadAsPDF() {
    let pageIndex: number = Number(this.paginator.pageIndex);
    let pageSize: number = Number(this.paginator.pageSize);

    let currentPageEnd = pageSize * (pageIndex + 1);
    let currentPageStart = currentPageEnd - (pageSize - 1);

    const htmlToPrint =
      '' +
      '<style type="text/css">' +
      '.pageFooter {' +
      '    display: table-footer-group;' +
      '    counter-increment: page;' +
      '}' +
      '.pageFooter:after {' +
      '   content: "Page " counter(page)' +
      '}' +
      '</style>';
    var printContents = document.getElementById('pdfTable')!.innerHTML;
    let popupWin: any = window.open(
      'Angular Large Table to pdf',
      '_blank',
      'width=768,height=auto'
    );

    popupWin.document.write(
      '<html><head>' +
        '<link rel="stylesheet" href="' +
        'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>' +
        '<style type="text/css">' +
        '.pageFooter {' +
        '    display: table-footer-group;' +
        '    counter-increment: page;' +
        '}' +
        '.pageFooter:after {' +
        '   content: "Page Number" counter(page)' +
        '}' +
        '</style>' +
        `</head>

        <body onload="window.print()">
          <style>
          .mat-column-select{display:none}
          </style>

          <div style="width:100%;  display: flex;flex-direction: row;align-items:center; margin-bottom:5px;margin-top:10px">
          <img style="width:100px;height:100px" src="assets/icons/logo.png" alt="app-logo" />
          <div style=" display: flex;flex-direction: column; width:100%">
            <span style="text-align: center;font-size:16px;color:blue;text-size:16px;font-weight:600;text-decoration-line: underline;">GETster.TECH PVT.LTD</span>
            <span style="text-align: center;font-size:16px;color:black;font-weight:600;text-transform: uppercase">Recycle Bin Data Of Users</span>
            <span style="text-align: center;font-size:14px;color:black;font-weight:600;">Records : ( ${currentPageStart} - ${currentPageEnd} of ${
          this.paginator.length
        } ) ${
          this.filterValue.length >= 1
            ? `(Filtered by -" ${this.filterValue} ")`
            : ''
        } (${moment().format('D MMM y h:mm a')})</span>
          </div>
          </div>

          ` +
        printContents +
        '</body>' +
        `
          <footer style="position: fixed; bottom: 0; width: 100%;">
          <div style=" display: flex;flex-direction: column; width:100%; align-items:center">
          <span style="text-align: end;font-size:12px;text-size:12px;font-weight:500">Jr Plaza Fourth Floor, Tank Street, </span>
          <span style="text-align: end;font-size:12px;text-size:12px;font-weight:500">Hosur, Tamil Nadu 635109</span>
          </div>
          </footer>
        ` +
        '</html>'
    );
    popupWin.document.close();
  }
  // Pre pay and share Dialog
  prePayAndShareDialog() {
    this._dialog.open(PrePayAndShareComponent, {
      width: '100%',
      height: '600px',
      disableClose: true,
    });
  }
  onSelectSelectedItem(value: any) {
    this.getSelectedOption.emit(value);
  }
  onSelectSelectedItem2(value: any) {
    this.getSelectedOption2.emit(value);
  }
  //* ------------------------------ Helper Function -----------------------*//

  //! -------------------------------  End  --------------------------------!//
}

// Tree interfaces
export class TodoItemNode {
  children!: TodoItemNode[];
  user_category_name!: string;
}

export interface DialogData {
  category_name: string;
  Component: string;
  parent: TreeData;
  isTop: boolean;
}

export interface TreeData {
  category_id: string;
  parent_category_id?: string;
  category_name: string;
  ishidden: boolean | string | number;
  children: TreeData[];
  level?: number;
  expandable?: boolean;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  user_category_name!: string;
  level!: number;
  expandable!: boolean;
}

// Table Interface
export interface PeriodicElement {
  wow_image: string;
  faculty_rating: number;
  unresolved_flags: string;
  subscription_charges: number;
}
// Table Interface
export interface PeriodicElement2 {
  name: string;
}
