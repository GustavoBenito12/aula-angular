import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing-module";
import { Button } from "./button/button";

@NgModule({
	declarations: [Button],

	imports: [CommonModule, SharedRoutingModule],
	exports: [Button],
})
export class SharedModule {}
