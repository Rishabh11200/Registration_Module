import AsyncStorage from '@react-native-async-storage/async-storage';

export async function set(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error on saving: `, e);
  }
}
