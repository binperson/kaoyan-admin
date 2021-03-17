import store from '/@/store';
import { VuexModule, getModule, Module } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';
import { LocaleSetting, LocaleType } from '/#/config';
import { createLocalStorage } from '/@/utils/cache';
import { LOCALE_KEY } from '/@/enums/cacheEnum';
import { localeSetting } from '/@/settings/localeSetting';

const ls = createLocalStorage();

const lsSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

const NAME = 'app-locale';
hotModuleUnregisterModule(NAME);

@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Locale extends VuexModule {
  private info: LocaleSetting = lsSetting;

  get getLocale(): LocaleType {
    return this.info?.locale;
  }
}

export const localeStore = getModule<Locale>(Locale);
