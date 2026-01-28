# Laboratory Information System (LIS)

A comprehensive Laboratory Information System for workflow management, automation, equipment integration, and compliance tracking.

## Overview

The Laboratory Information System provides complete laboratory workflow automation, equipment integration, result interpretation, report generation, analytics, and accreditation compliance tracking.

## Features

### 1. Lab Workflow Automation and Task Management
- **Automated Workflow Creation**: Create workflows with multiple steps for lab processes
- **Task Assignment**: Assign workflows and steps to specific staff members
- **Progress Tracking**: Real-time tracking of workflow progress and completion
- **Priority Management**: Set workflow priorities (STAT, Urgent, High, Normal, Low)
- **Duration Tracking**: Monitor estimated vs actual completion times

### 2. Lab Equipment Integration and Interfaces
- **Equipment Registration**: Register and manage all laboratory equipment
- **Interface Management**: Support for HL7, ASTM, TCP/IP, Serial, USB, REST API, and file-based interfaces
- **Connection Monitoring**: Real-time monitoring of equipment interface status
- **Maintenance Scheduling**: Track maintenance and calibration schedules
- **Equipment Status Tracking**: Monitor equipment status (Active, Maintenance, Calibration, Out of Order)

### 3. Lab Result Interpretation and Reference Ranges
- **Reference Range Management**: Define reference ranges by age group, gender, and test parameter
- **Critical Value Detection**: Automatic detection of critical and panic values
- **Result Interpretation**: Automated result interpretation based on reference ranges
- **Multi-demographic Support**: Support for different demographics and populations

### 4. Lab Report Generation and Formatting
- **Template Management**: Create and manage report templates for different report types
- **Multiple Formats**: Support for PDF, HTML, XML, HL7, and CSV formats
- **Automated Generation**: Automated report generation based on lab results
- **Custom Formatting**: Customizable headers, footers, and styling
- **Report Distribution**: Automated report sending and distribution

### 5. Lab Analytics and Performance Metrics
- **Turnaround Time Analysis**: Calculate and track average turnaround times
- **Throughput Metrics**: Monitor lab throughput and capacity utilization
- **Error Rate Tracking**: Track and analyze error rates and quality metrics
- **Equipment Utilization**: Monitor equipment usage and efficiency
- **Performance Dashboards**: Real-time dashboards with key performance indicators
- **Trend Analysis**: Historical trend analysis and forecasting

### 6. Lab Accreditation and Compliance Tracking
- **Accreditation Management**: Track multiple accreditations (CAP, CLIA, ISO 15189, etc.)
- **Compliance Monitoring**: Monitor compliance with accreditation requirements
- **Assessment Scheduling**: Schedule and track accreditation assessments
- **Document Management**: Store and manage accreditation certificates and documents
- **Compliance Reporting**: Generate compliance reports and dashboards
- **Corrective Action Tracking**: Track corrective actions and follow-ups

## API Endpoints

### Lab Workflows
- `POST /lab-workflows` - Create a new workflow
- `GET /lab-workflows` - Get all workflows
- `GET /lab-workflows/status/:status` - Get workflows by status
- `GET /lab-workflows/assignee/:assignedTo` - Get workflows by assignee
- `GET /lab-workflows/:id` - Get workflow details
- `PATCH /lab-workflows/:id/start` - Start a workflow
- `PATCH /lab-workflows/:id/complete` - Complete a workflow
- `PATCH /lab-workflows/steps/:stepId/status` - Update step status

### Lab Equipment
- `POST /lab-equipment` - Register new equipment
- `GET /lab-equipment` - Get all equipment
- `GET /lab-equipment/status/:status` - Get equipment by status
- `GET /lab-equipment/maintenance/due` - Get equipment due for maintenance
- `GET /lab-equipment/interfaces/status` - Get interface status
- `GET /lab-equipment/:id` - Get equipment details
- `PATCH /lab-equipment/:id/status` - Update equipment status
- `PATCH /lab-equipment/:id/schedule-maintenance` - Schedule maintenance
- `POST /lab-equipment/interfaces/:interfaceId/test` - Test interface connection

### Lab Reports
- `POST /lab-reports/templates` - Create report template
- `GET /lab-reports/templates` - Get all templates
- `GET /lab-reports/templates/type/:type` - Get templates by type
- `POST /lab-reports/generate` - Generate a report
- `GET /lab-reports` - Get all reports
- `GET /lab-reports/status/:status` - Get reports by status
- `GET /lab-reports/lab-order/:labOrderId` - Get reports for lab order
- `POST /lab-reports/:id/send` - Send a report

### Lab Analytics
- `GET /lab-analytics/dashboard` - Get analytics dashboard
- `POST /lab-analytics/calculate/turnaround-time` - Calculate turnaround time
- `POST /lab-analytics/calculate/throughput` - Calculate throughput
- `POST /lab-analytics/calculate/error-rate` - Calculate error rate
- `GET /lab-analytics/metrics/type/:metricType` - Get metrics by type
- `GET /lab-analytics/metrics/period/:period` - Get metrics by period

### Lab Accreditation & Compliance
- `POST /lab-accreditation` - Create accreditation record
- `GET /lab-accreditation` - Get all accreditations
- `GET /lab-accreditation/dashboard` - Get compliance dashboard
- `GET /lab-accreditation/expiring` - Get expiring accreditations
- `GET /lab-accreditation/:id` - Get accreditation details
- `PATCH /lab-accreditation/:id/status` - Update accreditation status
- `PATCH /lab-accreditation/:id/schedule-assessment` - Schedule assessment
- `POST /lab-accreditation/:id/compliance-records` - Create compliance record
- `GET /lab-accreditation/:id/compliance-records` - Get compliance records
- `GET /lab-accreditation/compliance/status/:status` - Get compliance by status
- `GET /lab-accreditation/compliance/type/:type` - Get compliance by type

## Database Entities

### Core Workflow Entities
- **LabWorkflow**: Main workflow entity with status and priority
- **LabWorkflowStep**: Individual workflow steps with type and status

### Equipment Management Entities
- **LabEquipment**: Equipment registration and management
- **LabEquipmentInterface**: Equipment interface configuration and monitoring

### Result Interpretation Entities
- **LabReferenceRange**: Reference ranges for result interpretation

### Reporting Entities
- **LabReportTemplate**: Report templates with formatting
- **LabReport**: Generated reports with status tracking

### Analytics Entities
- **LabAnalytics**: Performance metrics and analytics data

### Compliance Entities
- **LabAccreditation**: Accreditation records and certificates
- **LabComplianceRecord**: Detailed compliance tracking records

## Workflow Types

### Sample Collection Workflow
1. Sample collection request
2. Sample labeling and tracking
3. Sample transport to lab
4. Sample receipt verification
5. Sample preparation

### Analysis Workflow
1. Test assignment to equipment
2. Equipment preparation and calibration
3. Sample analysis execution
4. Quality control verification
5. Result validation

### Result Review Workflow
1. Initial result review
2. Critical value notification
3. Result interpretation
4. Final approval
5. Report generation

### Quality Control Workflow
1. QC sample preparation
2. QC analysis execution
3. QC result evaluation
4. Corrective action (if needed)
5. QC documentation

## Equipment Integration

### Supported Interface Types
- **HL7**: Health Level 7 messaging standard
- **ASTM**: ASTM E1394 standard for laboratory data
- **TCP/IP**: Network-based communication
- **Serial**: RS-232/RS-485 serial communication
- **USB**: USB-based communication
- **REST API**: RESTful web service integration
- **File-based**: File import/export integration

### Equipment Types
- Hematology Analyzers
- Chemistry Analyzers
- Immunoassay Analyzers
- PCR Machines
- Microscopes
- Centrifuges
- Incubators
- Spectrophotometers

## Report Types

### Individual Result Reports
- Single test results with reference ranges
- Patient demographics and clinical information
- Critical value alerts and notifications

### Cumulative Reports
- Multiple test results over time
- Trend analysis and historical data
- Comprehensive patient lab history

### Quality Control Reports
- QC results and statistics
- Control charts and trend analysis
- Out-of-control investigations

### Performance Reports
- Turnaround time analysis
- Throughput and capacity metrics
- Error rate and quality indicators

## Analytics and Metrics

### Key Performance Indicators (KPIs)
- **Turnaround Time**: Average time from order to result
- **Throughput**: Number of tests processed per hour/day
- **Error Rate**: Percentage of tests with errors or rejections
- **Equipment Utilization**: Percentage of equipment uptime
- **Staff Productivity**: Tests per staff member per shift

### Metric Periods
- Hourly metrics for real-time monitoring
- Daily metrics for operational management
- Weekly/Monthly metrics for trend analysis
- Quarterly/Yearly metrics for strategic planning

## Compliance and Accreditation

### Supported Accreditation Types
- **CAP**: College of American Pathologists
- **CLIA**: Clinical Laboratory Improvement Amendments
- **ISO 15189**: Medical laboratories quality and competence
- **NABL**: National Accreditation Board for Testing and Calibration
- **JCI**: Joint Commission International
- **Local Health Authority**: Regional compliance requirements

### Compliance Types
- Quality Control compliance
- Proficiency Testing compliance
- Equipment Maintenance compliance
- Staff Training compliance
- Documentation compliance
- Safety Protocols compliance
- Data Integrity compliance

## Installation and Setup

1. Ensure all new entities are included in the database migration
2. Update the main app module to import the LaboratoryModule
3. Configure database connections for the new entities
4. Set up file storage for reports and certificates
5. Configure equipment interfaces as needed

## Usage Examples

### Creating a Workflow
```typescript
const workflow = await labWorkflowService.create({
  name: 'Blood Chemistry Analysis',
  priority: WorkflowPriority.NORMAL,
  labOrderId: 'order-123',
  steps: [
    {
      name: 'Sample Preparation',
      type: StepType.SAMPLE_PREPARATION,
      stepOrder: 1,
      estimatedDuration: 15
    },
    {
      name: 'Chemistry Analysis',
      type: StepType.ANALYSIS,
      stepOrder: 2,
      equipmentId: 'analyzer-001',
      estimatedDuration: 30
    }
  ]
});
```

### Generating a Report
```typescript
const report = await labReportService.generateReport(
  'template-123',
  'order-456',
  'user-789',
  { includeGraphs: true, format: 'PDF' }
);
```

### Calculating Analytics
```typescript
const turnaroundTime = await labAnalyticsService.calculateTurnaroundTime(
  MetricPeriod.DAILY,
  new Date('2024-01-01'),
  new Date('2024-01-02')
);
```

## Benefits

✅ **Automated Workflows**: Streamlined lab processes with automated task management
✅ **Equipment Integration**: Seamless integration with laboratory equipment
✅ **Quality Assurance**: Built-in quality control and compliance tracking
✅ **Performance Monitoring**: Real-time analytics and performance metrics
✅ **Regulatory Compliance**: Comprehensive accreditation and compliance management
✅ **Scalable Architecture**: Modular design for easy expansion and customization

## Acceptance Criteria Met

✅ **Lab workflows are automated and efficient**
- Comprehensive workflow automation with step-by-step tracking
- Priority-based task management and assignment
- Real-time progress monitoring and completion tracking

✅ **Lab equipment integrations work seamlessly**
- Support for multiple interface types and protocols
- Real-time connection monitoring and error handling
- Automated maintenance and calibration scheduling

✅ **Lab reports are properly formatted and distributed**
- Flexible report templates with multiple format support
- Automated report generation and distribution
- Customizable formatting and styling options

✅ **Lab performance meets accreditation standards**
- Comprehensive compliance tracking and monitoring
- Multiple accreditation type support
- Automated compliance reporting and dashboard
- Performance metrics aligned with industry standards