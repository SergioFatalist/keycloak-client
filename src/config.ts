export interface KeycloakConfiguration {
  url: string;
  realm: string;
  clientId: string;
  clientSecret?: string | undefined;
}

export interface KeycloakOptions {
  onLoad: 'check-sso' | 'login-required';
  flow: 'standard' | 'implicit' | 'hybrid';
  adapter: 'default' | 'cordova' | 'cordova-native' | object;
  useNonce: boolean;
}
