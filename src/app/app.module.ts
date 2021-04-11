import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SellUsedCarModule } from './sell-used-car/sell-used-car.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { FeatureProductModule } from './feature-product/feature-product.module';
import { ServiceSectionModule } from './service-section/service-section.module';
import { LatestOfferModule } from './latest-offer/latest-offer.module';
import { TeamModule } from './team/team.module';
import { FooterModule } from './footer/footer.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { NewCarsModule } from './new-cars/new-cars.module';
import { FaqModule } from './faq/faq.module';
import { InstantOfferModule } from './instant-offer/instant-offer.module';
import { HeaderModule } from './header/header.module';
import { SideSearchModule } from './side-search/side-search.module';
import { CarSearchModule } from './car-search/car-search.module';
import { cardetailModule } from './car-detail/car-detail.module';
import { CertifiedProgramsModule } from './certified-programs/certified-programs.module';
import { CreateAdModule } from './create-ad/create-ad.module';
import { ContactComponent } from './contact/contact.component';
import { FeatureProductService } from './feature-product/feature-product.service';
import { ServiceSectionService } from './service-section/service-section.service';
import { LatestOfferService } from './latest-offer/latest-offer.service';
import { TeamService } from './team/team.service';
import { FooterService } from './footer/footer.service';
import { TestimonialService } from './testimonial/testimonial.service';
import { NewCarsService } from './new-cars/new-cars.service';
import { FaqService } from './faq/faq.service';
import { InstantOfferService } from './instant-offer/instant-offer.service';
import { HeaderService } from './header/header.service';
import { CertifiedProgramsService } from './certified-programs/certified-programs.service';
import { CreateAdService } from './create-ad/create-ad.service';
import { HomeService } from './home/home.service';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddNewCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    InstantOfferModule,
    HeaderModule,
    NewCarsModule,
    CreateAdModule,
    TeamModule,
    HomeModule,
    SellUsedCarModule,
    //ShopModule,
    FooterModule,
    FaqModule,
    CertifiedProgramsModule,
    CarSearchModule,
    cardetailModule,
    //BlogModule,
    TestimonialModule,
    LatestOfferModule,
    FeatureProductModule,
    ServiceSectionModule,
    NgxSpinnerModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    SideSearchModule,
    AngularMaterialModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    InstantOfferService,
    HeaderService,
    NewCarsService,
    CreateAdService,
    TeamService,
    HomeService,
    FooterService,
    FaqService,
    CertifiedProgramsService,
    TestimonialService,
    LatestOfferService,
    FeatureProductService,
    ServiceSectionService,
    NgxImageCompressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
