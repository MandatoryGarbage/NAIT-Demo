import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserListComponent} from './component/user-list/user-list.component';
import {SearchBoxComponent} from './component/search-box/search-box.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TwitchService} from './service/twitch.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {OrderPipe} from './pipe/order.pipe';
import {LoadingOverlayComponent} from './component/loading-overlay/loading-overlay.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SearchBoxComponent,
    OrderPipe,
    LoadingOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    TwitchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
