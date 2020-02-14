import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ViewRef, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { EntryTestComponent } from './entry-test.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: false }) vc: ViewContainerRef;// host view
  @ViewChild('t1', { read: TemplateRef, static: false }) t1: TemplateRef<null>;// template view
  @ViewChild('t2', { read: TemplateRef, static: false }) t2: TemplateRef<null>;
  view1: ViewRef;
  view2: ViewRef;
  viewContainer;
  constructor(private r: ComponentFactoryResolver, private injector: Injector) { }

  ngOnInit() {
  }
  view3: ViewRef;

  ngAfterViewInit() {
    this.view1 = this.t1.createEmbeddedView(null);
    this.view2 = this.t2.createEmbeddedView(null);
    let factory = this.r.resolveComponentFactory(EntryTestComponent);
    let ref: ComponentRef<any> = factory.create(this.injector);
    this.view3 = ref.hostView;

  }

  show(type) {
    const view = type === '1' ? this.view1 : this.view3;
    this.vc.detach();
    this.vc.insert(view);
  }
}
