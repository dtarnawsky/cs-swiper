import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule],
})
export class HomePage {

  content: string;
  constructor() {
    this.content = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi mauris, finibus vel ornare id, luctus sit amet orci. Suspendisse neque neque, egestas id risus nec, hendrerit pharetra felis. Phasellus quis sollicitudin erat. Nullam urna sem, mollis in euismod non, rhoncus in justo. Etiam et elementum tortor, vel pellentesque ipsum. Curabitur elementum elit id tristique tempor. Vestibulum aliquet nisl nec libero ornare cursus ac vitae tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis at facilisis eros.

    Duis id condimentum justo. Cras semper tempus dui ut consequat. Nam dapibus, urna luctus placerat viverra, nisl dolor laoreet sapien, quis pellentesque nisi ex tincidunt nunc. Fusce tristique libero turpis, in pharetra orci tincidunt non. Quisque quam ligula, blandit a dictum in, vehicula ac augue. Maecenas velit felis, pharetra sed ultrices a, egestas id orci. Fusce eu erat libero. Sed elementum neque in augue maximus tempus.
    
    Mauris sodales convallis ipsum id mollis. Praesent rhoncus augue at augue congue fringilla a quis justo. Etiam interdum velit vitae augue tempus laoreet. Nulla non tempor sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tempus massa quis vestibulum accumsan. Aenean finibus purus nec pulvinar finibus. In convallis aliquam elit, at posuere diam semper ut. Sed vitae efficitur urna.
    
    Morbi non eros odio. Maecenas eleifend id lorem a elementum. Integer sit amet placerat augue, vel feugiat eros. Nam quis enim venenatis, mollis turpis ut, rhoncus urna. Aliquam egestas aliquam lectus, at condimentum odio commodo eget. Praesent lectus metus, sagittis sit amet mauris at, porttitor eleifend diam. Proin consectetur euismod tortor, ac fringilla sapien rutrum id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia, nisi eu tincidunt aliquet, nisl odio pellentesque enim, ac aliquet ex velit nec arcu. Vestibulum aliquam ut mauris quis vulputate. Sed tempus accumsan felis, non molestie urna. Aliquam vulputate lectus nec magna blandit tincidunt. Nam vitae sapien gravida leo interdum fermentum. Aliquam venenatis varius ante, non tincidunt tellus volutpat a.
    
    Quisque ligula quam, rutrum et sapien ut, auctor efficitur diam. Etiam elementum risus nec nulla ornare consequat. Praesent feugiat arcu eget viverra vehicula. Donec ut sapien nec urna blandit interdum a a lorem. Morbi eget tincidunt sem. Vivamus posuere luctus dui sed fermentum. Suspendisse potenti. Pellentesque a quam porta, euismod sem eu, dictum urna. Morbi a elementum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque quis sapien in volutpat. Vestibulum sed ipsum sed elit congue gravida. Curabitur convallis velit et leo cursus, sit amet commodo felis lacinia. Nunc faucibus sed libero quis pellentesque. Nam varius elit eget ultrices porta.
    
    
    `;
   }
}
