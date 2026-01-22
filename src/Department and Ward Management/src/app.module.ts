import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentsModule } from "./departments/departments.module";
import { WardsModule } from "./wards/wards.module";
import { RoomsModule } from "./rooms/rooms.module";
import { BedsModule } from "./beds/beds.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { WorkflowsModule } from "./workflows/workflows.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password",
      database: "hospital_management",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true, // Set to false in production
    }),
    DepartmentsModule,
    WardsModule,
    RoomsModule,
    BedsModule,
    EquipmentModule,
    WorkflowsModule,
  ],
})
export class AppModule {}
