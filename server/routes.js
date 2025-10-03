"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
var http_1 = require("http");
var storage_1 = require("./storage");
var schema_1 = require("@shared/schema");
var zod_1 = require("zod");
function registerRoutes(app) {
    return __awaiter(this, void 0, void 0, function () {
        var downloadRequestSchema, httpServer;
        var _this = this;
        return __generator(this, function (_a) {
            // Contact form submission
            app.post("/api/contact", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var validatedData, submission, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            validatedData = schema_1.insertContactSubmissionSchema.parse(req.body);
                            return [4 /*yield*/, storage_1.storage.createContactSubmission(validatedData)];
                        case 1:
                            submission = _a.sent();
                            res.json({ success: true, id: submission.id });
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            if (error_1 instanceof zod_1.z.ZodError) {
                                res.status(400).json({
                                    message: "Validation error",
                                    errors: error_1.errors
                                });
                            }
                            else {
                                res.status(500).json({
                                    message: "Failed to submit contact form"
                                });
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            // Get contact submissions (for admin purposes)
            app.get("/api/contact-submissions", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var submissions, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, storage_1.storage.getContactSubmissions()];
                        case 1:
                            submissions = _a.sent();
                            res.json(submissions);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            res.status(500).json({
                                message: "Failed to fetch contact submissions"
                            });
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            downloadRequestSchema = zod_1.z.object({
                name: zod_1.z.string().min(2),
                email: zod_1.z.string().email(),
                businessType: zod_1.z.string().min(1),
                phone: zod_1.z.string().min(10),
                toolkitId: zod_1.z.string().min(1),
            });
            app.post("/api/toolkit-download", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var validatedData, downloadRecord;
                return __generator(this, function (_a) {
                    try {
                        validatedData = downloadRequestSchema.parse(req.body);
                        downloadRecord = __assign(__assign({ id: Math.random().toString(36).substr(2, 9) }, validatedData), { downloadedAt: new Date().toISOString() });
                        // In a real implementation, you would:
                        // 1. Store the download request in database
                        // 2. Send an email with the download link
                        // 3. Track downloads for analytics
                        res.json({
                            success: true,
                            message: "Download request processed successfully",
                            downloadId: downloadRecord.id
                        });
                    }
                    catch (error) {
                        if (error instanceof zod_1.z.ZodError) {
                            res.status(400).json({
                                message: "Validation error",
                                errors: error.errors
                            });
                        }
                        else {
                            res.status(500).json({
                                message: "Failed to process download request"
                            });
                        }
                    }
                    return [2 /*return*/];
                });
            }); });
            // Download endpoint for toolkit files
            app.get("/api/download/:toolkitId", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var toolkitId, toolkitFiles, file;
                return __generator(this, function (_a) {
                    toolkitId = req.params.toolkitId;
                    toolkitFiles = {
                        "business-budget-template": {
                            filename: "Business-Budget-Template.xlsx",
                            contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            content: "Excel template content would be here"
                        },
                        "cash-flow-tracker": {
                            filename: "Cash-Flow-Tracker.xlsx",
                            contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            content: "Cash flow tracker content would be here"
                        },
                        "tax-calendar": {
                            filename: "Tax-Calendar-2024-25.pdf",
                            contentType: "application/pdf",
                            content: "Tax calendar PDF content would be here"
                        },
                        "profit-loss-template": {
                            filename: "Profit-Loss-Statement-Template.xlsx",
                            contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            content: "P&L template content would be here"
                        },
                        "expense-tracker": {
                            filename: "Business-Expense-Tracker.xlsx",
                            contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                            content: "Expense tracker content would be here"
                        },
                        "financial-ratios-guide": {
                            filename: "Financial-Ratios-Analysis-Guide.pdf",
                            contentType: "application/pdf",
                            content: "Financial ratios guide PDF content would be here"
                        }
                    };
                    file = toolkitFiles[toolkitId];
                    if (!file) {
                        return [2 /*return*/, res.status(404).json({ message: "Toolkit not found" })];
                    }
                    // In production, you would serve actual files
                    res.setHeader('Content-Disposition', "attachment; filename=\"".concat(file.filename, "\""));
                    res.setHeader('Content-Type', file.contentType);
                    res.send("This would be the actual ".concat(file.filename, " file content. \n    \nIn a real implementation, this endpoint would:\n1. Serve actual Excel/PDF files from a secure storage location\n2. Track download analytics\n3. Require authentication or email verification\n4. Generate personalized files with company branding\n\nFile: ").concat(file.filename, "\nType: ").concat(file.contentType, "\nToolkit ID: ").concat(toolkitId, "\n\nThis is a demonstration of the download functionality for TaxNBooks Financial Planning Toolkit."));
                    return [2 /*return*/];
                });
            }); });
            httpServer = (0, http_1.createServer)(app);
            return [2 /*return*/, httpServer];
        });
    });
}
