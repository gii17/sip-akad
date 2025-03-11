import { DynamicModule } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';

export function autoloadModules(): DynamicModule[] {
  const moduleDirs = readdirSync(join(__dirname, '../../modules'));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return moduleDirs
    .map((folder) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
        const modulePath = require(
          join(__dirname, '../../modules', folder, `${folder}.module`),
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment
        const moduleClass = modulePath.default || Object.values(modulePath)[0];
        if (typeof moduleClass === 'function') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return moduleClass;
        }
      } catch (e) {
        console.warn(`Module ${folder} tidak ditemukan atau error:`, e);
        return null;
      }
    })
    .filter((m) => m !== null);
}
