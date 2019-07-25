import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
constructor(){
this.siteHeader = $('.site-header');
this.headerTriggerElement = $('.large-hero__title');
this.createHeaderWaypoint();

/* podświetlanie linków */
this.pageSections = $('.page-section');
this.headerLinks = $('.primary-nav a');
this.createPageSectionWaypoints();
/* płynne skrolowanie do sekcji po kliknięciu w link */
this.addSmoothScrolling();
}


/* płynne skrolowanie, zaczynam od zainstalowania npm install jquery-smooth-scroll --save, póżniej dodaje  wtyczkę na górze(import) i wywołuje metodę w construktorze */
addSmoothScrolling(){
this.headerLinks.smoothScroll();
}

createHeaderWaypoint(){
/* this ma prowadzć do klasy StickyHeader stąd zmienna that, this.headerTriggerElement[0], pozwala na wskazanie elementu DOM, parametr direction i póżniej zapis z if pozwala na powrót stickyHeader do jasnego koloru gdy skroluje w górę */
let that = this;
/* tym razem trigerem ma zostać h1 */
new Waypoint({
element: this.headerTriggerElement[0],
handler: function(){

that.siteHeader.toggleClass('site-header--dark');
/* if(direction === "down"){
that.siteHeader.addClass('site-header--dark');
}else{
that.siteHeader.removeClass('site-header--dark');
} */
}
});
}

/* podświetlanie linków */
createPageSectionWaypoints(){
let that = this;
this.pageSections.each(function(){
let currentPageSection = this;
new Waypoint({
element: currentPageSection,
handler: function(direction){
if(direction === "down"){
    let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
    /* usuwanie koloru z linków */
    that.headerLinks.removeClass('is-current-link');
    /* dodawanie koloru do aktualnego linka */
    $(matchingHeaderLink).addClass('is-current-link');
}

},
/* właściwość offset spowoduje że kolor linka zmieni się kiedy sekcja będzie 18% od góry */
offset: "18%"
});

new Waypoint({
    element: currentPageSection,
    handler: function(direction){
    if(direction === "up"){
        let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
        that.headerLinks.removeClass('is-current-link');
    
        $(matchingHeaderLink).addClass('is-current-link');
    }
    },
    offset: "-40%"
    });
})
}
}

export default StickyHeader;