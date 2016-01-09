export class App {
  configureRouter(config, router){
    config.title = 'The Wandering Itinerant';
    config.map([
      { route: ['','welcome'],  name: 'welcome',  moduleId: './welcome',  nav: true, title:'Welcome'},
      { route: 'sample1',         name: 'sample1',    moduleId: './sample1',    nav: true, title:'sample1' },
        { route: 'sample2',         name: 'sample2',    moduleId: './sample2',    nav: true, title:'sample2' }
    ]);

    this.router = router;
  }
}