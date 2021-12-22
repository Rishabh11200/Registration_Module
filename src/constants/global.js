export const global = {
  _isCheck: false,
  get isCheck() {
    return this._isCheck;
  },
  set isCheck(state) {
    this._isCheck = state;
  },
};
