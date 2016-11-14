import Vue from 'vue'
import LandingPageView from 'src/components/LandingPageView'

describe('LandingPageView.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(LandingPageView)
    }).$mount()

    expect(vm.$el.querySelector('h1').textContent).to.contain('AEM')
  })
  it('should start with a status of online', () => {
    expect(LandingPageView.data().isOnline).to.equal(true)
    expect(LandingPageView.computed.status()).to.be.ok
  })
})
