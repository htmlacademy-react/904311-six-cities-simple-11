import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): UserInfo | null => state[NameSpace.User].userInfo;
export const getUserInfoLoadingStatus = (state: State): boolean => state[NameSpace.User].isUserInfoLoading;
