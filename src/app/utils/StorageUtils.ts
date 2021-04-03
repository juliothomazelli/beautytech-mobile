export enum StorageUtilsTypes{
  sessionToken = 'sessionToken',
  userInfo     = 'userInfo'
}

export class StorageUtils {

  public static clearData() {
    for (const item in StorageUtilsTypes) {
      if (isNaN(Number(item))) {
          this.clearSpecificData((item as StorageUtilsTypes));
      }
    }
  }

  public static clearSpecificData(VpStaticStorageTypes : StorageUtilsTypes){
    window.localStorage.removeItem(VpStaticStorageTypes);
  }

  public static storeData(key: StorageUtilsTypes, data: any) {
    window.localStorage.setItem(key, data);
  }

  public static storeDataJSON(key: StorageUtilsTypes, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  public static getData(key: string, share : boolean = false) {
    return window.localStorage.getItem(key);
  }

  public static getDataJSON(key: string, share : boolean = false) {
    return JSON.parse(window.localStorage.getItem(key));
  }
}