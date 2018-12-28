using AutoMapper;
using DutchTreat.Data;
using DutchTreat.Data.Entities;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
  [Route("api/orders/{orderid}/items")]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class OrderItemsController : Controller
  {
    private readonly IDutchRepository _repository;
    private readonly ILogger<ProductsController> _logger;
    private readonly IMapper _mapper;

    public OrderItemsController(IDutchRepository repository,
      ILogger<ProductsController> logger, IMapper mapper) {
      _repository = repository; _logger = logger;  _mapper = mapper; }

    [HttpGet]
    public IActionResult Get(int orderId)
    {
      try
      {
        var order = _repository.GetOrderById(User.Identity.Name, orderId);
        if (order != null) return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));
        return NotFound();
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to get order items: {ex}");
        return BadRequest("Failed to get order items");
      }
    }

    [HttpGet("{id}")]
    public IActionResult Get(int orderId, int id)
    {
      try
      {
        var order = _repository.GetOrderById(User.Identity.Name, orderId);
        if (order != null) {
          var item = order.Items.Where(i => i.Id == id).FirstOrDefault();
          if (item != null)
          {
            return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));
          }
        }
        return NotFound();
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to get order item: {ex}");
        return BadRequest("Failed to get order item");
      }
    }

    // Create methods for POST, PUT and DELETE in order to allow you to add new items, update items and delete items  

    //[HttpPost]
    //public IActionResult Post([FromBody]OrderItemViewModel model)
    //{
    //  try
    //  {
    //    if (ModelState.IsValid)
    //    {
    //      //var newOrder = new Order() {
    //      //  OrderDate = model.OrderDate, OrderNumber = model.OrderNumber, Id = model.OrderId };

    //      var newOrder = _mapper.Map<OrderViewModel, Order>(model);

    //      if (newOrder.OrderDate == DateTime.MinValue) newOrder.OrderDate = DateTime.Now;

    //      _repository.AddEntity(newOrder);
    //      if (_repository.SaveAll()) {
    //        //var vm = new OrderViewModel() {
    //        //  OrderId = newOrder.Id, OrderDate = newOrder.OrderDate, OrderNumber = newOrder.OrderNumber };

    //        return Created($"/api/orders/{newOrder.Id}", _mapper.Map<Order, OrderViewModel>(newOrder));
    //      }
    //    }
    //    else return BadRequest(ModelState);
    //  }
    //  catch (Exception ex)
    //  {
    //    _logger.LogError($"Failed to save new order: {ex}");

    //  }
    //  return BadRequest("Failed to save new order");
    //}
  }
}
