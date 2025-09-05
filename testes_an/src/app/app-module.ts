import {
	NgModule,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { ProdutosModule } from "./produtos/produtos-module";
@NgModule({
	declarations: [App],
	imports: [BrowserModule, AppRoutingModule, ProdutosModule],
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
	],
	bootstrap: [App],
})
export class AppModule {}
