import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Existing Entities
import { LabTest } from './entities/lab-test.entity';
import { LabTestParameter } from './entities/lab-test-parameter.entity';
import { LabOrder } from './entities/lab-order.entity';
import { LabOrderItem } from './entities/lab-order-item.entity';
import { Specimen } from './entities/specimen.entity';
import { LabResult } from './entities/lab-result.entity';
import { LabResultValue } from './entities/lab-result-value.entity';
import { CriticalValueAlert } from './entities/critical-value-alert.entity';
import { QualityControlLog } from './entities/quality-control-log.entity';

// New LIS Entities
import { LabWorkflow } from './entities/lab-workflow.entity';
import { LabWorkflowStep } from './entities/lab-workflow-step.entity';
import { LabEquipment } from './entities/lab-equipment.entity';
import { LabEquipmentInterface } from './entities/lab-equipment-interface.entity';
import { LabReferenceRange } from './entities/lab-reference-range.entity';
import { LabReportTemplate } from './entities/lab-report-template.entity';
import { LabReport } from './entities/lab-report.entity';
import { LabAnalytics } from './entities/lab-analytics.entity';
import { LabAccreditation } from './entities/lab-accreditation.entity';
import { LabComplianceRecord } from './entities/lab-compliance-record.entity';

// Existing Services
import { LabTestsService } from './services/lab-tests.service';
import { LabOrdersService } from './services/lab-orders.service';
import { SpecimensService } from './services/specimens.service';
import { LabResultsService } from './services/lab-results.service';
import { CriticalAlertsService } from './services/critical-alerts.service';
import { QualityControlService } from './services/quality-control.service';

// New LIS Services
import { LabWorkflowService } from './services/lab-workflow.service';
import { LabEquipmentService } from './services/lab-equipment.service';
import { LabReportService } from './services/lab-report.service';
import { LabAnalyticsService } from './services/lab-analytics.service';
import { LabAccreditationService } from './services/lab-accreditation.service';

// Existing Controllers
import { LabTestsController } from './controllers/lab-tests.controller';
import { LabOrdersController } from './controllers/lab-orders.controller';
import { SpecimensController } from './controllers/specimens.controller';
import { LabResultsController } from './controllers/lab-results.controller';
import { QualityControlController } from './controllers/quality-control.controller';

// New LIS Controllers
import { LabWorkflowController } from './controllers/lab-workflow.controller';
import { LabEquipmentController } from './controllers/lab-equipment.controller';
import { LabReportController } from './controllers/lab-report.controller';
import { LabAnalyticsController } from './controllers/lab-analytics.controller';
import { LabAccreditationController } from './controllers/lab-accreditation.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            // Existing entities
            LabTest,
            LabTestParameter,
            LabOrder,
            LabOrderItem,
            Specimen,
            LabResult,
            LabResultValue,
            CriticalValueAlert,
            QualityControlLog,
            // New LIS entities
            LabWorkflow,
            LabWorkflowStep,
            LabEquipment,
            LabEquipmentInterface,
            LabReferenceRange,
            LabReportTemplate,
            LabReport,
            LabAnalytics,
            LabAccreditation,
            LabComplianceRecord,
        ]),
    ],
    controllers: [
        // Existing controllers
        LabTestsController,
        LabOrdersController,
        SpecimensController,
        LabResultsController,
        QualityControlController,
        // New LIS controllers
        LabWorkflowController,
        LabEquipmentController,
        LabReportController,
        LabAnalyticsController,
        LabAccreditationController,
    ],
    providers: [
        // Existing services
        LabTestsService,
        LabOrdersService,
        SpecimensService,
        LabResultsService,
        CriticalAlertsService,
        QualityControlService,
        // New LIS services
        LabWorkflowService,
        LabEquipmentService,
        LabReportService,
        LabAnalyticsService,
        LabAccreditationService,
    ],
    exports: [
        // Existing services
        LabTestsService,
        LabOrdersService,
        SpecimensService,
        LabResultsService,
        CriticalAlertsService,
        QualityControlService,
        // New LIS services
        LabWorkflowService,
        LabEquipmentService,
        LabReportService,
        LabAnalyticsService,
        LabAccreditationService,
    ],
})
export class LaboratoryModule { }
