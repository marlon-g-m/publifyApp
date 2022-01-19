export class Constantes {



  /* Mensajes de error traducidos */
  public static ERROR_CODIGO_VERIFICACION = 'Código de verificación incorrecto. Por favor, intente nuevamente.';
  public static ERROR_CODIGO_EXPIRACION = 'El código de verificación ha expirado. Por favor, intente solicitando el código nuevamente.';
  public static ERROR_LOGIN = 'Nombre de usuario o contraseña incorrecto.';
  public static ERROR_PASSWORD_GENERAL = 'La nueva contraseña no cumple con las políticas, por favor intente nuevamente con otra.';
  public static ERROR_USUARIO_EXPIRACION = 'El inicio de sesión ha expirado, por favor intente ingresando nuevamente.';
  public static ERROR_EXCEDE_LIMITE_INTENTOS = 'Ha excedido el límite de intentos, por favor intente nuevamente más tarde.';
  public static ERROR_PASSWORD_AUTORIZACION = 'No es posible cambiar la contraseña del usuario debido a su estado actual.';
  public static ERROR_PASSWORD_ACTUAL = 'Su contraseña actual no coincide. Por favor, intente nuevamente.';

  /*
  public static ERROR_PASSWORD_LARGO = "La contraseña debe contener al menos 8 caracteres."
  public static ERROR_PASSWORD_MAYUS = "La contraseña debe contener al menos una mayúscula"
  public static ERROR_PASSWORD_MINUS = "La contraseña debe contener al menos una minúscula"
  public static ERROR_PASSWORD_SYMBOL = "La contraseña debe contener al menos un símbolo"
  */

  /** PERMISOS - SCOPES  **/
  // HOME
  public static PERMISO_VER_HOME = "app.home.ver";
  // DASHBOARD
  public static PERMISO_VER_DASHBOARD = "app.dashboard.ver";
  // ADMINISTACIÓN
  public static PERMISO_VER_ADMINISTRACION = "app.admin.ver";
  // GESTIÓN DE CLIENTES
  public static PERMISO_VER_CLIENTE = "app.admin.cliente.ver";
  public static PERMISO_GESTIONAR_CLIENTE = "app.admin.cliente.gestionar";
  public static PERMISO_VER_ASIGNACIONES = "app.admin.asignacion.usuarios.ver";
  public static PERMISO_GESTIONAR_ASIGNACIONES = "app.admin.asignacion.usuarios.gestionar";
  public static USUARIO_NO_ENCONTRADO = 'Usuario no encontrado.';
    // ADMINISTACIÓN USUARIOS
    public static PERMISO_ADMINISTRACION_LISTA_USUARIOS = "app.admin.usuarios.ver";
    public static PERMISO_ADMINISTRACION_INFO_USUARIO = "app.admin.usuario.ver";
    public static PERMISO_ADMINISTRACION_EDITAR_USUARIO = "app.admin.usuario.editar";
    public static PERMISO_ADMINISTRACION_EDITAR_GRUPOS_USUARIO = "app.admin.usuario.grupo.editar"
    public static PERMISO_ADMINISTRACION_ELIMINAR_USUARIO = "app.admin.usuario.eliminar";
    public static PERMISO_ADMINISTRACION_CREAR_USUARIO = "app.admin.usuario.crear";
  // DASHBOARD MANTENCION
  public static PERMISO_VER_DASHBOARD_MANTENCION = "app.manten.dashboard.ver";

  // GESTIÓN DE CLIENTES
  //public static PERMISO_VER_CLIENTE = "app.admin.cliente.ver";
  //public static PERMISO_GESTIONAR_CLIENTE = "app.admin.cliente.gestionar";
  //public static PERMISO_VER_ASIGNACIONES = "app.admin.asignacion.usuarios.ver";
  //public static PERMISO_GESTIONAR_ASIGNACIONES = "app.admin.asignacion.usuarios.gestionar";

}
