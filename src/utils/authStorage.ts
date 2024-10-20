const b64Encode = (str: string) => {
  try {
    const b64En = window.btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      }),
    );
    return b64En;
  } catch (error) {
    console.error('b64Encode error:', error);
  }
};

const b64Decode = (str: string) => {
  try {
    const b64De = decodeURIComponent(
      Array.prototype.map
        .call(window.atob(str), function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return b64De;
  } catch (error) {
    console.error('b64Decode error:', error);
  }
};

const saveTokenToLocalStorage = (
  accessToken: string | null,
  refreshToken: string | null,
) => {
  if (!accessToken || !refreshToken) {
    return;
  }

  const encodingAccessToken = b64Encode(accessToken);
  const encodingRefreshToken = b64Encode(refreshToken);

  if (encodingAccessToken) {
    window.localStorage.setItem('accessToken', encodingAccessToken);
  }

  if (encodingRefreshToken) {
    window.localStorage.setItem('refreshToken', encodingRefreshToken);
  }
};

const getTokenFromLocalStorage = () => {
  const encodedAccessToken = window.localStorage.getItem('accessToken');
  const encodedRefreshToken = window.localStorage.getItem('refreshToken');

  // 토큰이 없는 경우
  if (!encodedAccessToken || !encodedRefreshToken) {
    return { accessToken: null, refreshToken: null };
  }

  const accessToken = b64Decode(encodedAccessToken);
  const refreshToken = b64Decode(encodedRefreshToken);

  return { accessToken, refreshToken };
};

const removeTokenFromLocalStorage = () => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
};

export {
  b64Encode,
  b64Decode,
  saveTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
};
