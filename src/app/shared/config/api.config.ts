// API Configuration - Centralized API endpoints
import { environment } from '../../../environments/environment';

export const API_CONFIG = {
  baseUrl: environment.apiUrl,
  baseUrlWithoutApi: environment.apiBaseUrl,
  
  // Auth endpoints
  auth: {
    login: `${environment.apiUrl}/Auth/Login`,
    logout: `${environment.apiUrl}/Auth/Logout`,
    getCurrentUser: `${environment.apiUrl}/Auth/GetCurrentUser`,
    forgotPassword: `${environment.apiUrl}/Auth/ForgotPassword`,
    resetPassword: `${environment.apiUrl}/Auth/ResetPassword`
  },
  
  // Task endpoints
  tasks: {
    getAll: `${environment.apiUrl}/Task/GetAllTasks`,
    addMainTask: `${environment.apiUrl}/Task/AddMainTask`,
    updateMainTask: `${environment.apiUrl}/Task/UpdateMainTask`,
    updateTaskImportant: (id: number) => `${environment.apiUrl}/Task/UpdateTaskImportant/important/${id}`,
    updateTaskCompleted: (id: number) => `${environment.apiUrl}/Task/UpdateTaskCompleted/completed/${id}`,
    updateLevel1SubtaskCompleted: (id: number) => `${environment.apiUrl}/Task/UpdateLevel1SubtaskCompleted/level1/completed/${id}`,
    updateLevel2SubtaskCompleted: (id: number) => `${environment.apiUrl}/Task/UpdateLevel2SubtaskCompleted/level2/completed/${id}`,
    deleteMainTask: (id: number) => `${environment.apiUrl}/Task/DeleteMainTask/${id}`,
    addLevel1Subtask: `${environment.apiUrl}/Task/AddLevel1Subtask`,
    updateLevel1Subtask: `${environment.apiUrl}/Task/UpdateLevel1Subtask`,
    deleteLevel1Subtask: (id: number) => `${environment.apiUrl}/Task/DeleteLevel1Subtask/level1/${id}`,
    addLevel2Subtask: `${environment.apiUrl}/Task/AddLevel2Subtask`,
    updateLevel2Subtask: `${environment.apiUrl}/Task/UpdateLevel2Subtask`,
    deleteLevel2Subtask: (id: number) => `${environment.apiUrl}/Task/DeleteLevel2Subtask/level2/${id}`
  },
  
  // Periodic Task endpoints
  periodicTasks: {
    getAll: `${environment.apiUrl}/PeriodicTask/GetAllPeriodicTasks`,
    getById: (id: number) => `${environment.apiUrl}/PeriodicTask/GetPeriodicTaskById/${id}`,
    create: `${environment.apiUrl}/PeriodicTask/CreatePeriodicTask`,
    update: (id: number) => `${environment.apiUrl}/PeriodicTask/UpdatePeriodicTask/${id}`,
    delete: (id: number) => `${environment.apiUrl}/PeriodicTask/DeletePeriodicTask/${id}`
  },
  
  // Users endpoints
  users: {
    getAll: `${environment.apiUrl}/Users/GetAllUsers`,
    getById: (id: number) => `${environment.apiUrl}/Users/GetUserById/${id}`,
    create: `${environment.apiUrl}/Users/CreateUser`,
    update: `${environment.apiUrl}/Users/UpdateUser`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/Users/DeleteUser/${id}/${isHardDelete}`,
    changePassword: (userId: number) => `${environment.apiUrl}/Users/ChangePassword/${userId}/password`
  },
  
  // Category Master endpoints
  categories: {
    getAll: `${environment.apiUrl}/CategoryMaster/GetAllCategories`,
    getById: (id: number) => `${environment.apiUrl}/CategoryMaster/GetCategoryById/${id}`,
    addUpdate: `${environment.apiUrl}/CategoryMaster/AddUpdateCategory`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/CategoryMaster/DeleteCategory/${id}/${isHardDelete}`
  },
  
  // Status Master endpoints
  statuses: {
    getAll: `${environment.apiUrl}/StatusMaster/GetAllStatuses`,
    getById: (id: number) => `${environment.apiUrl}/StatusMaster/GetStatusById/${id}`,
    addUpdate: `${environment.apiUrl}/StatusMaster/AddUpdateStatus`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/StatusMaster/DeleteStatus/${id}/${isHardDelete}`
  },
  
  // Priority Master endpoints
  priorities: {
    getAll: `${environment.apiUrl}/PriorityMaster/GetAllPriorities`,
    getById: (id: number) => `${environment.apiUrl}/PriorityMaster/GetPriorityById/${id}`,
    addUpdate: `${environment.apiUrl}/PriorityMaster/AddUpdatePriority`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/PriorityMaster/DeletePriority/${id}/${isHardDelete}`
  },
  
  // URLs Master endpoints
  urls: {
    getAll: `${environment.apiUrl}/UrlsMaster/GetAllUrls`,
    getById: (id: number) => `${environment.apiUrl}/UrlsMaster/GetUrlById/${id}`,
    addUpdate: `${environment.apiUrl}/UrlsMaster/AddUpdateUrl`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/UrlsMaster/DeleteUrl/${id}/${isHardDelete}`,
    getCredentials: (urlId: number) => `${environment.apiUrl}/UrlsMaster/GetUrlCredentials/${urlId}`
  },
  
  // Credentials Master endpoints
  credentials: {
    getAll: `${environment.apiUrl}/CredentialsMaster/GetAllCredentials`,
    getById: (id: number) => `${environment.apiUrl}/CredentialsMaster/GetCredentialById/${id}`,
    addUpdate: `${environment.apiUrl}/CredentialsMaster/AddUpdateCredential`,
    delete: (id: number, isHardDelete: boolean = false) => `${environment.apiUrl}/CredentialsMaster/DeleteCredential/${id}/${isHardDelete}`
  },
  
  // Budget endpoints
  budget: {
    getAllMonths: `${environment.apiUrl}/Budget/GetAllMonths`,
    getMonthById: (id: number) => `${environment.apiUrl}/Budget/GetMonthById/${id}`,
    createMonth: `${environment.apiUrl}/Budget/CreateMonth`,
    updateMonth: (id: number) => `${environment.apiUrl}/Budget/UpdateMonth/${id}`,
    deleteMonth: (id: number) => `${environment.apiUrl}/Budget/DeleteMonth/${id}`,
    getCredits: (monthId: number) => `${environment.apiUrl}/Budget/GetCredits/${monthId}`,
    getDebits: (monthId: number) => `${environment.apiUrl}/Budget/GetDebits/${monthId}`
  },
  
  // Notes endpoints
  notes: {
    baseUrl: `${environment.apiUrl}/notes`,
    getAll: `${environment.apiUrl}/notes`,
    getById: (id: number) => `${environment.apiUrl}/notes/${id}`,
    create: `${environment.apiUrl}/notes`,
    update: (id: number) => `${environment.apiUrl}/notes/${id}`,
    delete: (id: number) => `${environment.apiUrl}/notes/${id}`
  },
  
  // Roles endpoints
  roles: {
    getAll: `${environment.apiUrl}/Roles/GetAllRoles`,
    getById: (id: number) => `${environment.apiUrl}/Roles/GetRoleById/${id}`,
    create: `${environment.apiUrl}/Roles/CreateRole`,
    update: `${environment.apiUrl}/Roles/UpdateRole`,
    delete: (id: number, isHardDelete: boolean) => `${environment.apiUrl}/Roles/DeleteRole/${id}/${isHardDelete}`,
    getPermissions: (roleId: number) => `${environment.apiUrl}/Roles/GetRolePermissions/${roleId}`
  },
  
  // Permissions endpoints
  permissions: {
    getAll: `${environment.apiUrl}/Permissions/GetAllPermissions`,
    getByModule: (module: string) => `${environment.apiUrl}/Permissions/GetPermissionsByModule/${module}`,
    getById: (id: number) => `${environment.apiUrl}/Permissions/GetPermissionById/${id}`,
    create: `${environment.apiUrl}/Permissions/CreatePermission`,
    update: `${environment.apiUrl}/Permissions/UpdatePermission`,
    delete: (id: number, isHardDelete: boolean) => `${environment.apiUrl}/Permissions/DeletePermission/${id}/${isHardDelete}`,
    getUniqueModules: `${environment.apiUrl}/Permissions/GetUniqueModules`
  }
};

