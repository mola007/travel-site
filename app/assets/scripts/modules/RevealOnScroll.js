import $ from 'jquery';
/* w projekcie wykorzystano bibliotekę waypoints, za pomocą której elementy pojawiają się/znikają podczas scrollowania, zaczynam od instalacji */
import waypionts from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {
/* w constructorze wpisałam argumenty, które będą reprezentowały element i offset dla elementów, instances znajdują się w app.js */
constructor(els, offset){
/* jeżeli dodam kolejny elemnt w jquery animacja również go obejmie 
ten kod jest reusable dla kilku elementów, kolejnsoć ustawienia metod i field ma znaczenie, this.createWaypoints musi być przed this.createWaypoints() aby ta widziała field*/
this.itemsToReveal = els;
this.offsetPercentage = offset;
this.hideInitially();
this.createWaypoints();
/* ten kod nie jest reusable wszystkie ustawienia będą takie same

this.itemsToReveal = $('.feature-item, .testimonial');
this.hideInitially();
this.createWaypoints(); */
}

hideInitially(){
this.itemsToReveal.addClass('reveal-item');
}

createWaypoints(){
/* ta część kodu z that jest po to aby kod prowadził do klasy RevealOnScroll a nie do poszczególnego obiektu*/
let that = this;
/* dla każdego elementu zostanie stworzona instnce of Waypoint, element jest odpowiednikiem DOM element, handler - co ma się stać z tym elementem, offset - kiedy ma pojawić się element jak byłoby 0 to element pojawiłby się dopiero na samy górze strony */
this.itemsToReveal.each(function(){
let currentItem = this;
new Waypoint({
element: currentItem,
handler: function(){
$(currentItem).addClass('reveal-item--is-visible');
},
/* zamiast hard-coded value of offset wpisuje moje field inne dla każdego elementu */
offset: that.offsetPercentage
/* offset: "85%" */
});
})
}

}

export default RevealOnScroll;