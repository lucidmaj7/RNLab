import AsyncStorage from '@react-native-community/async-storage';

const key = 'logswwww';

const logsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
     
      return parsed;
    } catch (e) {
      console.log(`logsStorage get error ${e}`);
      throw new Error('failed to load logs');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('failed to save logs');
    }
  },
};

export default logsStorage;
