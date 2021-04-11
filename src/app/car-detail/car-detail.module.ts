import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './car-detail.component';
import { FeatureProductModule } from '../feature-product/feature-product.module';
import { ServiceSectionModule } from '../service-section/service-section.module';
import { LatestOfferModule } from '../latest-offer/latest-offer.module';
import { TeamModule } from '../team/team.module';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { BlogModule } from '../blog/blog.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [CarDetailComponent],
    imports: [
      FeatureProductModule,
      ServiceSectionModule,
      LatestOfferModule,
      TeamModule,
      TestimonialModule,
      BlogModule,
      FooterModule,
      CommonModule,
      HeaderModule,
      SharedModule
    ],
    exports: [CarDetailComponent]
  })

  export class cardetailModule { }