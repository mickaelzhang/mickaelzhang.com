import { TimelineLite, Quart } from "gsap";

export default {
  show(target, cb = () => {}) {
    let tl = new TimelineLite();
    const banner = target.getElementsByClassName('SplashScreen__Banner')[0];
    const layer = target.getElementsByClassName('SplashScreen__CoverLayer')[0];

    // Original state
    tl.to(banner, 0.1, {
      transformOrigin: 'left',
      scaleX: 0,
    });

    // Transition
    tl.to(banner, 0.3, {
      scaleX: 1,
      ease: Expo.easeInOut,
    });

    tl.to(layer, 0.3, {
      transformOrigin: 'right',
      scaleX: 0,
      ease: Expo.easeInOut,
      onComplete() {
        cb();
      }
    });
  },
  hide(target, cb = () =>  {}) {
    let tl = new TimelineLite();
    const banner = target.getElementsByClassName('SplashScreen__Banner')[0];

    // Original state
    tl.to(target, 1, {
      transformOrigin: '0% 0%', // Top
      scaleY: 1,
    });

    // Make Logo banner dissappear
    tl.fromTo(banner, 0.2, {
      opacity: 1,
    }, {
      yPercent: -40,
      opacity: 0,
    }, "-=0.25");

    // Remove layer
    tl.to(target, 0.4, {
      scaleY: 0,
      ease: Quart.easeOut,
      onComplete() {
        cb();
      }
    });
  }
};