import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BookComponent } from "./products/book/book.component";
import { DiscountPipe } from "./pipes/discount.pipe";
import { FirstDirective } from "./directives/first.directive";
import { HostDirective } from './directives/host.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BannerOneComponent,
    BannerTwoComponent,
    NavComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    MobPartsComponent,
    BookComponent,
    DiscountPipe,
    FirstDirective,
    HostDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
