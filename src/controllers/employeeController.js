const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json({ success: true, data: employees });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get single employee
exports.getEmployee = async (req, res) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!employee)
      return res.status(404).json({ success: false, message: 'Employee not found' });
    res.json({ success: true, data: employee });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create employee
exports.createEmployee = async (req, res) => {
  const { name, email, department, salary } = req.body;
  if (!name || !email)
    return res.status(400).json({ success: false, message: 'Name and email required' });
  try {
    const employee = await prisma.employee.create({
      data: { name, email, department, salary: salary ? parseFloat(salary) : null }
    });
    res.status(201).json({ success: true, message: 'Employee created', data: employee });
  } catch (err) {
    if (err.code === 'P2002')
      return res.status(400).json({ success: false, message: 'Email already exists' });
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  const { name, email, department, salary } = req.body;
  try {
    const employee = await prisma.employee.update({
      where: { id: parseInt(req.params.id) },
      data: { name, email, department, salary: salary ? parseFloat(salary) : null }
    });
    res.json({ success: true, message: 'Employee updated', data: employee });
  } catch (err) {
    if (err.code === 'P2025')
      return res.status(404).json({ success: false, message: 'Employee not found' });
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    await prisma.employee.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ success: true, message: 'Employee deleted' });
  } catch (err) {
    if (err.code === 'P2025')
      return res.status(404).json({ success: false, message: 'Employee not found' });
    res.status(500).json({ success: false, message: err.message });
  }
};