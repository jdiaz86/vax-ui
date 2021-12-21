import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private localStorageService;


  constructor() {
    this.localStorageService = localStorage;
  }

  getToken(): string | null {
    return this.localStorageService.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string | null {
    return this.localStorageService.getItem(REFRESH_TOKEN);
  }

  saveToken(token: string): void {
    this.localStorageService.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken: string): void {
    this.localStorageService.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    this.localStorageService.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    this.localStorageService.removeItem(REFRESH_TOKEN);
  }}
