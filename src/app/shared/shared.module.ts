import { CommonModule } from "@angular/common";
import { CityPipe } from "./pipes/city.pipe";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe
    ],
    exports: [
        CityPipe
    ]
})
export class SharedModule {
}
