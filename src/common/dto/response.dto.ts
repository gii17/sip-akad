export type TActionType = 'create' | 'read' | 'update' | 'delete' | undefined;

interface OptionOne {
  entity: string;
  actionType: TActionType;
}

interface OptionTwo {
  message: string;
}

type PropReponseDto = OptionOne | OptionTwo;

// Pilih salah satu, contoh
// 1. Jika ingin menggunakan entity dan actionType (create, read, update, delete) kalau buat crud pake ini
// @ResponseFormat({ actionType: 'read', entity: 'user' })
// 2. Jika ingin menggunakan message
// @ResponseFormat({ message: 'Success login' })

export class ResponseDto {
  public readonly entity?: string;
  public readonly message?: string;
  public readonly actionType?: TActionType;

  constructor(param: PropReponseDto) {
    if ('entity' in param && 'actionType' in param) {
      this.entity = param.entity;
      this.actionType = param.actionType;
    } else if ('message' in param) {
      this.message = param.message;
    }
  }
}
