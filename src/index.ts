import _Vue, { PluginObject } from 'vue'
import component from '@/demo.vue'

type InstallableComponent = typeof component & PluginObject<never>

const Plugin: InstallableComponent =
  /*#__PURE__*/ ((): InstallableComponent => {
    const installable = component as unknown as InstallableComponent

    installable.install = (Vue: typeof _Vue) => {
      Vue.component('Demo', installable)
    }

    return installable
  })()

export default Plugin
