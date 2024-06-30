jest.mock('react-native', () => ({
    NativeModules: {
      // Agrega aquí los módulos nativos que necesitas simular en las pruebas
      PlatformConstants: {
        forceTouchAvailable: false,
      },
    },
    // Otros módulos de react-native que necesitas mockear
  }));
  jest.mock('react-native', () => ({
    StyleSheet: {
      create: jest.fn(),
      // Otros métodos de StyleSheet que puedas necesitar mockear para tus pruebas
    },
    // Otros módulos de react-native que necesites mockear o configurar
  }));