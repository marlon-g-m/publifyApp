
export class ServiceError {


  public static readonly NEW_PASSWORD_REQUIRED_CODE = 'NewPasswordRequired';
  public static readonly NEW_PASSWORD_REQUIRED_DESC = 'Debe modificar su contraseña';
  public static readonly USUARIO_NO_PERFILADO_CODE = 'UsuarioNoPublify';
  public static readonly USUARIO_NO_PERFILADO_DESC = 'Usuario sin perfil ';

  /* Mensajes de error que son necesarios traducir */
  /*
  public static readonly ERROR_PASSWORD_LARGO = "Password does not conform to policy: Password not long enough"
  public static readonly ERROR_PASSWORD_MAYUS = "Password does not conform to policy: Password must have uppercase characters"
  public static readonly ERROR_PASSWORD_MINUS = "Password does not conform to policy: Password must have lowercase characters"
  public static readonly ERROR_PASSWORD_SYMBOL = "Password does not conform to policy: Password must have symbol characters"
  */

  /* Cognito Exceptions */
  public static readonly EXCEPTION_NOT_AUTHORIZED = 'NotAuthorizedException';
  public static readonly EXCEPTION_USER_NOT_FOUND = 'UserNotFoundException';
  public static readonly EXCEPTION_LIMIT_EXCEEDED = 'LimitExceededException';
  public static readonly EXCEPTION_INVALID_PASSWORD = 'InvalidPasswordException';
  public static readonly EXCEPTION_INVALID_PARAMETER = 'InvalidParameterException';
  public static readonly EXCEPTION_CODE_MISMATCH = 'CodeMismatchException';
  public static readonly EXCEPTION_CODE_EXPIRED = 'ExpiredCodeException';



  constructor(statusCode: string, message: string, serviceName: string) {
      this.statusCode = statusCode;
      this.message = message;
      this.serviceName = serviceName;
  }

  statusCode: string;
  message: string;
  detail: any;
  serviceName: string;
}
