export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-blue'
  },
  {
    path: '/admin/media-monitoring',
    title: 'Media Monitoring',
    type: 'link',
    icontype: 'fas fa-binoculars text-blue'
  },
  {
    path: '/admin/social-analysis',
    title: 'Social Analysis',
    type: 'link',
    icontype: 'fas fa-chart-area text-blue'
  },
  {
    path: '/admin/crisis-detection',
    title: 'Crisis Detection',
    type: 'link',
    icontype: 'fas fa-exclamation-triangle text-blue'
  },
  {
    path: '/admin/reputation',
    title: 'Reputation',
    type: 'link',
    icontype: 'fas fa-star text-blue'
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    type: 'link',
    icontype: 'far fa-id-badge text-blue'
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }
];

/*
{
  path: '',
  title: '',
  type: 'link',
  icontype: ''
}
*/